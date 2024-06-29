import { familyNameTotals, familyNames } from "@/constants/familyNames";
import { firstNameTotals, firstNames } from "@/constants/firstNames";
import { professionalTotals, professionals } from "@/constants/professionals";
import { db } from "@/db";
import { familyNamesTable, firstNamesTable, professionalsTable } from "@/db/schema";
import { randomNumber, randomDate } from "@/lib/functions";

export async function getRandomUsernamesService({
  quantity = 1,
}: {
  quantity?: number,
}) {
  const apiService = "usernames/random";
  // This is for Production and now, it's under investigation for better performance and better architecture and better cost-efficiency
  // const firstNameCounts = await db.select().from(firstNamesTable);
  // const familyNameCounts = await db.select().from(familyNamesTable);
  // const professionalCounts = await db.select().from(professionalsTable);

  // const usernames = Array.from({ length: quantity }, (_, index) => {
  //   let loops = firstNameCounts.length;
  //   const f = firstNameCounts[randomNumber(loops)];

  //   loops = familyNameCounts.length;
  //   const l = familyNameCounts[randomNumber(loops)];

  //   loops = professionalCounts.length;
  //   const p = professionalCounts[randomNumber(loops)];

  //   const username = f.firstName + " " + l.familyName;
  //   const id = { firstNameId: f.id, familyNameId: l.id };
  //   const gender = f.gender;
  //   const birthdate = randomDate();

  //   return {
  //     id,
  //     username,
  //     gender,
  //     birthdate,
  //     professional: p,
  //   };
  // });

  // return {
  //   results: usernames,
  //   length: usernames.length,
  // };

  // This is for Testing purpose and data are from local @/constants/*
  const firstNameData = firstNames;
  const firstNameCounts = firstNameTotals;

  const familyNameData = familyNames;
  const familyNameCounts = familyNameTotals;

  const professionalData = professionals;
  const professionalCounts = professionalTotals;

  const usernames = Array.from({ length: quantity }, (_, index) => {
    const fId = randomNumber(firstNameCounts);
    const f = firstNameData[fId];

    const lId = randomNumber(familyNameCounts);
    const l = familyNameData[lId];

    const pId = randomNumber(professionalCounts);
    const p = professionalData[pId];

    const id = { firstNameId: fId + 1, familyNameId: lId + 1 };
    const username = f.firstName + " " + l.familyname;
    const gender = f.gender;
    const birthdate = randomDate();

    return {
      id,
      username,
      gender,
      birthdate,
      professional: {
        id: p.id + 1,
        professional: p.professional,
      },
    };
  });

  return {
    apiService,
    length: usernames.length,
    results: usernames,
  };
}


