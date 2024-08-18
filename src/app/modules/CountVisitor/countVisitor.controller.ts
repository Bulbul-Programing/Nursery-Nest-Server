import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { countVisitorService } from "./countVisitor.service";

const countVisitor = catchAsync(async (req: Request, res: Response) => {
  const result = await countVisitorService.countVisitorIntoDB()

  res.status(200).json({
    success: true,
    massage: 'count visitor successfully',
    data: result,
  });
});
const lastSevenDayVisitors = catchAsync(async (req: Request, res: Response) => {
  const result = await countVisitorService.getLastSevenDaysVisitorIntoDB()

  res.status(200).json({
    success: true,
    massage: 'last seven days visitor retrieve successfully',
    data: result,
  });
});

export const countVisitorController = {
    countVisitor,
    lastSevenDayVisitors
}