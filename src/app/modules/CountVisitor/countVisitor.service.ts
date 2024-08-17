import { visitorModel } from "./countVisitorModel";

const countVisitorIntoDB = async (query: Record<string, unknown>) => {
    const previousValue = await visitorModel.find()
    
  };

  
export const orderService = {
    countVisitorIntoDB,
  };
  