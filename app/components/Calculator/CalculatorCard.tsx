"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  calculateSolarSavings,
  PropertyType,
} from "./calculator";

export default function CalculatorCard() {
  const [bill, setBill] = useState("");
  const [property, setProperty] =
    useState<PropertyType>("home");

  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    if (!bill || Number(bill) <= 0) return;

    const data = calculateSolarSavings(
      Number(bill),
      property
    );

    setResult(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-3xl shadow-xl p-8"
    >
      {/* Heading */}

      <h3 className="text-3xl font-bold text-gray-900">
        Solar Savings Calculator
      </h3>

      <p className="text-gray-600 mt-2">
        Estimate how much you can save every month by switching
        to solar energy.
      </p>

      {/* Bill Input */}

      <div className="mt-8">

        <label className="block text-gray-700 font-semibold mb-2">
          Monthly Electricity Bill (₹)
        </label>

        <input
          type="number"
          placeholder="Example: 3500"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
        />

      </div>

      {/* Property */}

      <div className="mt-6">

        <label className="block text-gray-700 font-semibold mb-3">
          Property Type
        </label>

        <div className="flex gap-3 flex-wrap">

          {[
            ["home", "Home"],
            ["shop", "Shop"],
            ["industry", "Industry"],
          ].map(([value, label]) => (

            <button
              key={value}
              onClick={() =>
                setProperty(value as PropertyType)
              }
              className={`px-5 py-3 rounded-xl border transition ${
                property === value
                  ? "bg-green-600 text-white border-green-600"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {label}
            </button>

          ))}

        </div>

      </div>

      {/* Button */}

      <button
        onClick={handleCalculate}
        className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
      >
        Calculate Savings
      </button>

      {/* Result */}

      {result && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 rounded-2xl bg-green-50 p-6"
        >

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500 text-sm">
                Monthly Savings
              </p>

              <h4 className="text-3xl font-bold text-green-600">
                ₹{result.monthlySavings}
              </h4>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Yearly Savings
              </p>

              <h4 className="text-3xl font-bold text-green-600">
                ₹{result.yearlySavings}
              </h4>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Recommended System
              </p>

              <h4 className="text-2xl font-bold">
                {result.recommendedKW} KW
              </h4>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Estimated Payback
              </p>

              <h4 className="text-2xl font-bold">
                {result.payback}
              </h4>
            </div>

          </div>

        </motion.div>

      )}

    </motion.div>
  );
}