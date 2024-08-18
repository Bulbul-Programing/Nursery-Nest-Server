import { visitorModel } from './countVisitorModel';

const countVisitorIntoDB = async () => {
  const previousValue = await visitorModel.find().sort('-createdAt').limit(1);
  if (previousValue.length > 0) {
    const newValue = {
      totalVisitor: Number(previousValue[0].totalVisitor as string) + 1,
    };
    const update = await visitorModel.create(newValue);
    return update;
  }
  const totalVisitor = {totalVisitor : 1};
  const result = await visitorModel.create(totalVisitor);
  return result;
};
const getLastSevenDaysVisitorIntoDB = async () => {
  const getLast7Days = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      days.push(day.toISOString().slice(0, 10));
    }

    return days.reverse();
  };

  const today = new Date();
  const sevenDaysAgo = new Date(today);

  sevenDaysAgo.setDate(today.getDate() - 7);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  const endOfToday = new Date(today);

  const visitors = await visitorModel.aggregate([
    {
      $match: {
        createdAt: { $gte: sevenDaysAgo, $lte: endOfToday },
      },
    },
    {
      $addFields: {
        day: {
          $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
        },
      },
    },
    {
      $group: {
        _id: '$day',
        totalVisitors: { $sum: { $toDouble: '$totalVisitor' } },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  const last7Days = getLast7Days();

  const result = last7Days.map((day) => {
    const dayData = visitors.find((visitor) => visitor._id === day);
    return dayData ? dayData : { _id: day, totalVisitors: 0, count: 0 };
  });
  return result;
};

export const countVisitorService = {
  countVisitorIntoDB,
  getLastSevenDaysVisitorIntoDB
};
