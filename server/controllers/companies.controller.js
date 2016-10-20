import { Company } from '../models';

export const fetchCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json({
      success: true,
      result : companies,
    });
  } catch (err) {
    res.status(500)
      .json({
        success: false,
        message: err.toString(),
      });
  }
};

export const postCompany = async (req, res) => {
  try {
    const { name, address } = req.body;
    if (!name || !address) {
      res.status(500)
        .json({
          success: false,
          message: 'Please provide both name and address of company',
        });
    }
    const exists = await Company.findOne({ where: { name } });
    if (exists !== null) {
      res.status(500)
        .json({
          success: false,
          message: 'That company already exists!',
        });
    } else {
      const { id } = await Company.create({ name, address });
      res.json({
        success: true,
        id,
      });
    }
  } catch (err) {
    res.status(500)
      .json({
        success: false,
        message: err.toString(),
      });
  }
};
