import { useState } from 'react';

export default function RechartPie() {

  let totalCount = 0;
  let murderCount = 0;
  let attemptedmurderCount = 0;
  let strengthCount = 0;
  let rapeCount = 0;
  let similarrapeCount = 0;
  let compulsionCount = 0;
  let etcCount = 0;
  let arsonCount = 0;
  let larcenyCount = 0;
  let injuryCount = 0;


  const data = [
    { name: "살인기수", value:"murderCount" },
    { name: "살인미수등", value:"attemptedmurderCount" },
    { name: "강도", value:"strengthCount" },
    { name: "강간", value:"rapeCount" },
    { name: "유사강간", value:"similarrapeCount" },
    { name: "강제추행", value:"compulsionCount" },
    { name: "기타강간강제추행등", value:"etcCount" },
    { name: "방화", value:"arsonCount" },
    { name: "절도", value:"larcenyCount" },
    { name: "상해", value:"injuryCount" },
  ];
}