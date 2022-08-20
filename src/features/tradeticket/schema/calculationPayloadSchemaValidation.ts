import * as yup from "yup";

export const calculationPayloadSchemaValidation = yup.object().shape({
  cleanPrice: yup.number().required(),
  haircut: yup.number().required(),
  startCash: yup.number().required(),
  duration: yup.number().required().moreThan(0),
  transactionType: yup.string().required(),
  fixed: yup.boolean().required(),
  quantity: yup.number().required(),
  repoRate: yup.number().required(),
  repoRateType: yup.string().required(),
  repoYearBasis: yup.number().required(),
  isin: yup.string().required(),
})
