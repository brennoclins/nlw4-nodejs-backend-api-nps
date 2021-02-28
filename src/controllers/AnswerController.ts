import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {

  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { survey } = request.query;

    const surveysUsersrepository = getCustomRepository(SurveysUsersRepository);
    const surveyUser = await surveysUsersrepository.findOne({
      id: String(survey)
    });

    if(!surveyUser) {
      // return response.status(400).json({ eror: "Survey User does not exists!"});
      throw new AppError("Survey User does not exists!");
    }

    surveyUser.value = Number(value);

    await surveysUsersrepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController }