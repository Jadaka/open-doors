import { Review } from '../models';
import { getColumns, validateBody } from '../services/controllerHelpers';

export const validateReview = async (req, res, next) => {
  try {
    const requiredParams = await getColumns('Review', { salary: true });
    requiredParams.push('companyId');
    if (validateBody(req, requiredParams)) {
      next();
    } else {
      throw new Error(`invalid parameters. required parameters = ${requiredParams.join(', ')}`);
    }
  } catch (e) {
    res.json({
      success: false,
      message: e.toString(),
    });
  }
};

export const postReview = async (req, res) => {
  try {
    const {
      message,
      interactions,
      harassment,
      advancement,
      familySupport,
      workLifeBalance,
      equalPay,
      companyId,
      salary,
    } = req.body;
    const review = await Review.create({
      message,
      interactions,
      harassment,
      advancement,
      familySupport,
      workLifeBalance,
      equalPay,
      companyId,
      salary,
    });
    res.json({
      success: true,
      review : review.toJSON(),
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.toString(),
    });
  }
};
