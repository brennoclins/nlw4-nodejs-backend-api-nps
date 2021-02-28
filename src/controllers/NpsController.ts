import { Request, Response } from "express";
import { getCustomRepository, IsNull, Not } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const totalAnswers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull())
    })

    const detractors = totalAnswers.filter(survey => 
      (survey.value >= 0 && survey.value <= 6)
    ).length;

    const promoters = totalAnswers.filter(survey => 
      (survey.value >= 9 && survey.value <= 10)
    ).length;

    const passives = totalAnswers.filter(survey => 
      (survey.value >= 7 && survey.value <= 8)
    ).length;

    const calculate = ((promoters - detractors) / totalAnswers.length) * 100;
    

    return response.json({
      detractors,
      promoters,
      passives,
      allAnswers: totalAnswers.length,
      nps: Number(calculate.toFixed(2)),
    })
  }
}

export { NpsController }