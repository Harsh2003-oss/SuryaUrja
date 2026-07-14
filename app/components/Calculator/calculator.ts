export type PropertyType = "home" | "shop" | "industry";

export interface CalculationResult {
  monthlySavings: number;
  yearlySavings: number;
  recommendedKW: number;
  payback: string;
}

export function calculateSolarSavings(
  bill: number,
  property: PropertyType
): CalculationResult {
  let savingsRate = 0.75;
  let kwFactor = 1200;

  switch (property) {
    case "home":
      savingsRate = 0.75;
      kwFactor = 1200;
      break;

    case "shop":
      savingsRate = 0.78;
      kwFactor = 1400;
      break;

    case "industry":
      savingsRate = 0.82;
      kwFactor = 1800;
      break;
  }

  const monthlySavings = Math.round(bill * savingsRate);

  const yearlySavings = monthlySavings * 12;

  const recommendedKW = Math.max(
    1,
    Math.round(bill / kwFactor)
  );

  let payback = "4 - 6 Years";

  if (recommendedKW <= 2) {
    payback = "3 - 4 Years";
  } else if (recommendedKW >= 5) {
    payback = "5 - 6 Years";
  }

  return {
    monthlySavings,
    yearlySavings,
    recommendedKW,
    payback,
  };
}