const masterData = [
  {
    "juz": 1,
    "surah": [
      {
        "id": 1,
        "name":"Al-Fatihah",
        "firstVerse": 1,
        "lastVerse": 7
      },
      {
        "id": 2,
        "name":"Al-Baqarah",
        "firstVerse": 1,
        "lastVerse": 141
      }
    ]
  },
  {
    "juz": 2,
    "surah": [
      {
        "id": 2,
        "name":"Al-Baqarah",
        "firstVerse": 142,
        "lastVerse": 252
      }
    ]
  },
  {
    "juz": 3,
    "surah": [
      {
        "id": 2,
        "name":"Al-Baqarah",
        "firstVerse": 253,
        "lastVerse": 286
      },
      {
        "id": 3,
        "name":"Ali Imran",
        "firstVerse": 1,
        "lastVerse": 92
      }
    ]
  },
  {
    "juz": 4,
    "surah": [
      {
        "id": 3,
        "name":"Ali Imran",
        "firstVerse": 93,
        "lastVerse": 200
      },
      {
        "id": 4,
        "name":"An-Nisa",
        "firstVerse": 1,
        "lastVerse": 23
      }
    ]
  },
  {
    "juz": 5,
    "surah": [
      {
        "id": 4,
        "name":"An-Nisa",
        "firstVerse": 24,
        "lastVerse": 147
      }
    ]
  },
  {
    "juz": 6,
    "surah": [
      {
        "id": 4,
        "name":"An-Nisa",
        "firstVerse": 148,
        "lastVerse": 176
      },
      {
        "id": 5,
        "name":"Al-Ma'idah",
        "firstVerse": 1,
        "lastVerse": 82
      }
    ]
  },
  {
    "juz": 7,
    "surah": [
      {
        "id": 5,
        "name":"Al-Ma'idah",
        "firstVerse": 83,
        "lastVerse": 120
      },
      {
        "id": 6,
        "name":"Al-An'am",
        "firstVerse": 1,
        "lastVerse": 110
      }
    ]
  },
  {
    "juz": 8,
    "surah": [
      {
        "id": 6,
        "name":"Al-An'am",
        "firstVerse": 111,
        "lastVerse": 165
      },
      {
        "id": 7,
        "name":"Al-A'raf",
        "firstVerse": 1,
        "lastVerse": 87
      }
    ]
  },
  {
    "juz": 9,
    "surah": [
      {
        "id": 7,
        "name":"Al-A'raf",
        "firstVerse": 88,
        "lastVerse": 206
      },
      {
        "id": 8,
        "name":"Al-Anfal",
        "firstVerse": 1,
        "lastVerse": 40
      }
    ]
  },
  {
    "juz": 10,
    "surah": [
      {
        "id": 8,
        "name":"Al-Anfal",
        "firstVerse": 41,
        "lastVerse": 75
      },
      {
        "id": 9,
        "name":"At-Taubah",
        "firstVerse": 1,
        "lastVerse": 93
      }
    ]
  },
  {
    "juz": 11,
    "surah": [
      {
        "id": 9,
        "name":"At-Taubah",
        "firstVerse": 94,
        "lastVerse": 129
      },
      {
        "id": 10,
        "name":"Yunus",
        "firstVerse": 1,
        "lastVerse": 109
      },
      {
        "id": 11,
        "name":"Hud",
        "firstVerse": 1,
        "lastVerse": 5
      }
    ]
  },
  {
    "juz": 12,
    "surah": [
      {
        "id": 11,
        "name":"Hud",
        "firstVerse": 6,
        "lastVerse": 123
      },
      {
        "id": 12,
        "name":"Yusuf",
        "firstVerse": 1,
        "lastVerse": 52
      }
    ]
  },
  {
    "juz": 13,
    "surah": [
      {
        "id": 12,
        "name":"Yusuf",
        "firstVerse": 53,
        "lastVerse": 111
      },
      {
        "id": 13,
        "name":"Ar-Ra'd",
        "firstVerse": 1,
        "lastVerse": 43
      },
      {
        "id": 14,
        "name":"Ibrahim",
        "firstVerse": 1,
        "lastVerse": 52
      }
    ]
  },
  {
    "juz": 14,
    "surah": [
      {
        "id": 15,
        "name":"Al-Hijr",
        "firstVerse": 1,
        "lastVerse": 99
      },
      {
        "id": 16,
        "name":"An-Nahl",
        "firstVerse": 1,
        "lastVerse": 128
      }
    ]
  },
  {
    "juz": 15,
    "surah": [
      {
        "id": 17,
        "name":"Al-Isra",
        "firstVerse": 1,
        "lastVerse": 111
      },
      {
        "id": 18,
        "name":"Al-Kahf",
        "firstVerse": 1,
        "lastVerse": 74
      }
    ]
  },
  {
    "juz": 16,
    "surah": [
      {
        "id": 18,
        "name":"Al-Kahf",
        "firstVerse": 75,
        "lastVerse": 110
      },
      {
        "id": 19,
        "name":"Maryam",
        "firstVerse": 1,
        "lastVerse": 98
      },
      {
        "id": 20,
        "name":"Taha",
        "firstVerse": 1,
        "lastVerse": 135
      }
    ]
  },
  {
    "juz": 17,
    "surah": [
      {
        "id": 21,
        "name":"Al-Anbiya",
        "firstVerse": 1,
        "lastVerse": 112
      },
      {
        "id": 22,
        "name":"Al-Hajj",
        "firstVerse": 1,
        "lastVerse": 78
      }
    ]
  },
  {
    "juz": 18,
    "surah": [
      {
        "id": 23,
        "name":"Al-Mu'minun",
        "firstVerse": 1,
        "lastVerse": 118
      },
      {
        "id": 24,
        "name":"An-Nur",
        "firstVerse": 1,
        "lastVerse": 64
      },
      {
        "id": 25,
        "name":"Al-Furqan",
        "firstVerse": 1,
        "lastVerse": 20
      }
    ]
  },
  {
    "juz": 19,
    "surah": [
      {
        "id": 25,
        "name":"Al-Furqan",
        "firstVerse": 21,
        "lastVerse": 77
      },
      {
        "id": 26,
        "name":"Asy-Syu'ara'",
        "firstVerse": 1,
        "lastVerse": 227
      },
      {
        "id": 27,
        "name":"An-Naml",
        "firstVerse": 1,
        "lastVerse": 55
      }
    ]
  },
  {
    "juz": 20,
    "surah": [
      {
        "id": 27,
        "name":"An-Naml",
        "firstVerse": 56,
        "lastVerse": 93
      },
      {
        "id": 28,
        "name":"Al-Qasas",
        "firstVerse": 1,
        "lastVerse": 88
      },
      {
        "id": 29,
        "name":"Al-'Ankabut",
        "firstVerse": 1,
        "lastVerse": 45
      }
    ]
  },
  {
    "juz": 21,
    "surah": [
      {
        "id": 29,
        "name":"Al-'Ankabut",
        "firstVerse": 46,
        "lastVerse": 69
      },
      {
        "id": 30,
        "name":"Ar-Rum",
        "firstVerse": 1,
        "lastVerse": 60
      },
      {
        "id": 31,
        "name":"Luqman",
        "firstVerse": 1,
        "lastVerse": 34
      },
      {
        "id": 32,
        "name":"As-Sajdah",
        "firstVerse": 1,
        "lastVerse": 30
      },
      {
        "id": 33,
        "name":"Al-Ahzab",
        "firstVerse": 1,
        "lastVerse": 30
      },
    ]
  },
  {
    "juz": 22,
    "surah": [
      {
        "id": 33,
        "name":"Al-Ahzab",
        "firstVerse": 31,
        "lastVerse": 73
      },
      {
        "id": 34,
        "name":"Saba'",
        "firstVerse": 1,
        "lastVerse": 54
      },
      {
        "id": 35,
        "name":"Fatir",
        "firstVerse": 1,
        "lastVerse": 45
      },
      {
        "id": 36,
        "name":"Ya Sin",
        "firstVerse": 1,
        "lastVerse": 27
      },
    ]
  },
  {
    "juz": 23,
    "surah": [
      {
        "id": 36,
        "name":"Ya Sin",
        "firstVerse": 28,
        "lastVerse": 83
      },
      {
        "id": 37,
        "name":"As-Saffat",
        "firstVerse": 1,
        "lastVerse": 82
      },
      {
        "id": 38,
        "name":"Sad",
        "firstVerse": 1,
        "lastVerse": 88
      },
      {
        "id": 39,
        "name":"Az-Zumar",
        "firstVerse": 1,
        "lastVerse": 31
      },
    ]
  },
  {
    "juz": 24,
    "surah": [
      {
        "id": 39,
        "name":"Az-Zumar",
        "firstVerse": 32,
        "lastVerse": 75
      },
      {
        "id": 40,
        "name":"Al-Ghafir",
        "firstVerse": 1,
        "lastVerse": 85
      },
      {
        "id": 41,
        "name":"Al-Fussilat",
        "firstVerse": 1,
        "lastVerse": 46
      },
    ]
  },
  {
    "juz": 25,
    "surah": [
      {
        "id": 41,
        "name":"Al-Fussilat",
        "firstVerse": 47,
        "lastVerse": 54
      },
      {
        "id": 42,
        "name":"Asy-Syura",
        "firstVerse": 1,
        "lastVerse": 53
      },
      {
        "id": 43,
        "name":"Az-Zukhruf",
        "firstVerse": 1,
        "lastVerse": 89
      },
      {
        "id": 44,
        "name":"Ad-Dukhan",
        "firstVerse": 1,
        "lastVerse": 59
      },
      {
        "id": 45,
        "name":"Al-Jatsiyah",
        "firstVerse": 1,
        "lastVerse": 32
      },
    ]
  },
  {
    "juz": 26,
    "surah": [
      {
        "id": 45,
        "name":"Al-Jatsiyah",
        "firstVerse": 33,
        "lastVerse": 37
      },
      {
        "id": 46,
        "name":"Al-Ahqaf",
        "firstVerse": 1,
        "lastVerse": 35
      },
      {
        "id": 47,
        "name":"Muhammad",
        "firstVerse": 1,
        "lastVerse": 38
      },
      {
        "id": 48,
        "name":"Al-Fath",
        "firstVerse": 1,
        "lastVerse": 29
      },
      {
        "id": 49,
        "name":"Al-Hujurat",
        "firstVerse": 1,
        "lastVerse": 18
      },
      {
        "id": 50,
        "name":"Qaf",
        "firstVerse": 1,
        "lastVerse": 45
      },
      {
        "id": 51,
        "name":"Az-Zariyat",
        "firstVerse": 1,
        "lastVerse": 30
      },
    ]
  },
  {
    "juz": 27,
    "surah": [
      {
        "id": 51,
        "name":"Az-Zariyat",
        "firstVerse": 31,
        "lastVerse": 60
      },
      {
        "id": 52,
        "name":"At-Tur",
        "firstVerse": 1,
        "lastVerse": 49
      },
      {
        "id": 53,
        "name":"An-Najm",
        "firstVerse": 1,
        "lastVerse": 62
      },
      {
        "id": 54,
        "name":"Al-Qamar",
        "firstVerse": 1,
        "lastVerse": 55
      },
      {
        "id": 55,
        "name":"Ar-Rahman",
        "firstVerse": 1,
        "lastVerse": 78
      },
      {
        "id": 56,
        "name":"Al-Waqi'ah",
        "firstVerse": 1,
        "lastVerse": 96
      },
      {
        "id": 57,
        "name":"Al-Hadid",
        "firstVerse": 1,
        "lastVerse": 29
      },
    ]
  },
  {
    "juz": 28,
    "surah": [
      {
        "id": 58,
        "name":"Al-Mujadilah",
        "firstVerse": 1,
        "lastVerse": 22
      },
      {
        "id": 59,
        "name":"Al-Hasyr",
        "firstVerse": 1,
        "lastVerse": 24
      },
      {
        "id": 60,
        "name":"Al-Mumtahanah",
        "firstVerse": 1,
        "lastVerse": 13
      },
      {
        "id": 61,
        "name":"As-Saff",
        "firstVerse": 1,
        "lastVerse": 14
      },
      {
        "id": 62,
        "name":"Al-Jumu'ah",
        "firstVerse": 1,
        "lastVerse": 11
      },
      {
        "id": 63,
        "name":"Al-Munafiqun",
        "firstVerse": 1,
        "lastVerse": 11
      },
      {
        "id": 64,
        "name":"At-Tagabun",
        "firstVerse": 1,
        "lastVerse": 18
      },
      {
        "id": 65,
        "name":"At-Talaq",
        "firstVerse": 1,
        "lastVerse": 12
      },
      {
        "id": 66,
        "name":"At-Tahrim",
        "firstVerse": 1,
        "lastVerse": 12
      },
    ]
  },
  {
    "juz": 29,
    "surah": [
      {
        "id": 67,
        "name":"Al-Mulk",
        "firstVerse": 1,
        "lastVerse": 30
      },
      {
        "id": 68,
        "name":"Al-Qalam",
        "firstVerse": 1,
        "lastVerse": 52
      },
      {
        "id": 69,
        "name":"Al-Haqqah",
        "firstVerse": 1,
        "lastVerse": 52
      },
      {
        "id": 70,
        "name":"Al-Ma'arij",
        "firstVerse": 1,
        "lastVerse": 44
      },
      {
        "id": 71,
        "name":"Nuh",
        "firstVerse": 1,
        "lastVerse": 28
      },
      {
        "id": 72,
        "name":"Al-Jinn",
        "firstVerse": 1,
        "lastVerse": 28
      },
      {
        "id": 73,
        "name":"Al-Muzzammil",
        "firstVerse": 1,
        "lastVerse": 20
      },
      {
        "id": 74,
        "name":"Al-Muddassir",
        "firstVerse": 1,
        "lastVerse": 56
      },
      {
        "id": 75,
        "name":"Al-Qiyamah",
        "firstVerse": 1,
        "lastVerse": 40
      },
      {
        "id": 76,
        "name":"Al-Insan",
        "firstVerse": 1,
        "lastVerse": 31
      },
      {
        "id": 77,
        "name":"Al-Mursalat",
        "firstVerse": 1,
        "lastVerse": 50
      }
    ]
  },
  {
    "juz": 30,
    "surah": [
      {
        "id": 78,
        "name":"An-Naba",
        "firstVerse": 1,
        "lastVerse": 40
      },
      {
        "id": 79,
        "name":"An-Naaziaat",
        "firstVerse": 1,
        "lastVerse": 46
      },
      {
        "id": 80,
        "name":"Abasa",
        "firstVerse": 1,
        "lastVerse": 40
      },
      {
        "id": 81,
        "name":"At-Takwiir",
        "firstVerse": 1,
        "lastVerse": 29
      },
      {
        "id": 82,
        "name":"Al-Infithaar",
        "firstVerse": 1,
        "lastVerse": 19
      },
      {
        "id": 83,
        "name":"Al-Muthaffifiin",
        "firstVerse": 1,
        "lastVerse": 26
      },
      {
        "id": 84,
        "name":"Al-Insyiqaaq",
        "firstVerse": 1,
        "lastVerse": 25
      },
      {
        "id": 85,
        "name":"Al-Buruuj",
        "firstVerse": 1,
        "lastVerse": 22
      },
      {
        "id": 86,
        "name":"Ath-Thaariq",
        "firstVerse": 1,
        "lastVerse": 17
      },
      {
        "id": 87,
        "name":"Al-A'laa",
        "firstVerse": 1,
        "lastVerse": 19
      },
      {
        "id": 88,
        "name":"Al-Ghaasyiyah",
        "firstVerse": 1,
        "lastVerse": 26
      },
      {
        "id": 89,
        "name":"Al-Fajr",
        "firstVerse": 1,
        "lastVerse": 30
      },
      {
        "id": 90,
        "name":"Al-Balad",
        "firstVerse": 1,
        "lastVerse": 20
      },
      {
        "id": 91,
        "name":"Asy-Syams",
        "firstVerse": 1,
        "lastVerse": 15
      },
      {
        "id": 92,
        "name":"Al-Lail",
        "firstVerse": 1,
        "lastVerse": 21
      },
      {
        "id": 93,
        "name":"Adh-Dhuhaa",
        "firstVerse": 1,
        "lastVerse": 11
      },
      {
        "id": 94,
        "name":"Al-Insyirah",
        "firstVerse": 1,
        "lastVerse": 8
      },
      {
        "id": 95,
        "name":"At-Tin",
        "firstVerse": 1,
        "lastVerse": 8
      },
      {
        "id": 96,
        "name":"Al-Alaq",
        "firstVerse": 1,
        "lastVerse": 19
      },
      {
        "id": 97,
        "name":"Al-Qadr",
        "firstVerse": 1,
        "lastVerse": 5
      },
      {
        "id": 98,
        "name":"Al-Bayyinah",
        "firstVerse": 1,
        "lastVerse": 8
      },
      {
        "id": 99,
        "name":"Al-Zalzalah",
        "firstVerse": 1,
        "lastVerse": 8
      },
      {
        "id": 100,
        "name":"Al-Aadiyaat",
        "firstVerse": 1,
        "lastVerse": 11
      },
      {
        "id": 101,
        "name":"Al-Qaari'ah",
        "firstVerse": 1,
        "lastVerse": 11
      },
      {
        "id": 102,
        "name":"At-Takaatsur",
        "firstVerse": 1,
        "lastVerse": 8
      },
      {
        "id": 103,
        "name":"Al-Ashr",
        "firstVerse": 1,
        "lastVerse": 13
      },
      {
        "id": 104,
        "name":"Al-Humazah",
        "firstVerse": 1,
        "lastVerse": 9
      },
      {
        "id": 105,
        "name":"Al-Fiil",
        "firstVerse": 1,
        "lastVerse": 5
      },
      {
        "id": 106,
        "name":"Quraisy",
        "firstVerse": 1,
        "lastVerse": 4
      },
      {
        "id": 107,
        "name":"Al-Maa'uun",
        "firstVerse": 1,
        "lastVerse": 7
      },
      {
        "id": 108,
        "name":"Al-Kautsar",
        "firstVerse": 1,
        "lastVerse": 3
      },
      {
        "id": 109,
        "name":"Al-Kaafiruun",
        "firstVerse": 1,
        "lastVerse": 6
      },
      {
        "id": 110,
        "name":"An-Nashr",
        "firstVerse": 1,
        "lastVerse": 3
      },
      {
        "id": 111,
        "name":"Al-Lahab",
        "firstVerse": 1,
        "lastVerse": 5
      },
      {
        "id": 112,
        "name":"Al-Ikhlash",
        "firstVerse": 1,
        "lastVerse": 4
      },
      {
        "id": 113,
        "name":"Al-Falaq",
        "firstVerse": 1,
        "lastVerse": 5
      },
      {
        "id": 114,
        "name":"An-Naas",
        "firstVerse": 1,
        "lastVerse": 6
      },
    ]
  }
];

let assigmentText = "";

const checkAllJuz = (elem) => {
  const checkBoxes = document.getElementsByName("juzSelection");
  checkBoxes.forEach(checkBox => {
    checkBox.checked ^= true;
  });

  if(document.querySelectorAll(':checked').length === 30){
    elem.textContent = "Hapus Pemilihan Juz";
  } else {
    elem.textContent = "Pilih Semua Juz";
  }
};

const getJuzSelection = () => {
  const juzSelection = [];

  const checkBoxes = document.getElementsByName("juzSelection");
  checkBoxes.forEach(checkBox => {
    if (checkBox.checked) {
      juzSelection.push(Number(checkBox.value));
    }
  });

  return juzSelection;
};

const generateVersesByJuz = (selectedJuz) => {
  const verses = [];
  const surahArr = selectedJuz.surah;

  if (selectedJuz.juz == 30) {
    surahArr.forEach(surah => {
      verses.push([surah.name, surah.firstVerse, surah.lastVerse])
    });
  } else {
    surahArr.forEach(surah => {
      for (let index = surah.firstVerse; index <= surah.lastVerse; index++) {
        verses.push([surah.name, index]);
      }
    });
  }

  return verses;
};

const divideVerseEqually = (verseArr, totalMember) => {
  let result = [];
  for (let i = totalMember; i > 0; i--) {
      result.push(verseArr.splice(0, Math.ceil(verseArr.length / i)));
  }

  return result;
};

const configureVerses = (juz, memberString) => {
  const memberArr = memberString.split(",");
  const verseArr  = generateVersesByJuz(juz);

  return divideVerseEqually(verseArr, memberArr.length);
};

const groupingVerses = (verseList) => {
  let groupConfig = [];

  verseList.forEach(verses => {
    let tempData  = [];
    let eachGroup = [];
    let currentSurah = verses[0][0];

    for (let index = 0; index < verses.length; index++) {
      const verse = verses[index];

      if (verse[0] == currentSurah) {
        tempData.push(verse);
      } else {
        let tempGroup = [];
        tempGroup.push(currentSurah);
        tempGroup.push(tempData[0][1]);
        tempGroup.push(tempData[tempData.length - 1][1]);
        eachGroup.push(tempGroup);

        currentSurah = verse[0];
        tempData = [];
        tempData.push(verse);
      };

      if (index == verses.length - 1) {
        let tempGroup = [];
        tempGroup.push(currentSurah);
        tempGroup.push(tempData[0][1]);
        tempGroup.push(tempData[tempData.length - 1][1]);
        eachGroup.push(tempGroup);
      }
    }

    groupConfig.push(eachGroup);
  });

  return groupConfig;
};

const createReportList = (verseGroup, memberString, juzNumber) => {
  assigmentText = "";
  assigmentText = assigmentText + `Pembagian Bacaan Juz ${juzNumber} \n`;
  const memberArr = memberString.split(",");
  const reportSection = document.querySelector("#report-section");

  // create report header
  const reportHeaderElem = document.createElement("header");
  const reportHeader = document.createElement("h6");
  reportHeader.innerText = `Pembagian Juz - ${juzNumber}`;
  reportHeaderElem.appendChild(reportHeader);
  reportSection.appendChild(reportHeaderElem);

  // create outer list
  const outerList = document.createElement("ul");
  outerList.classList.add("list-group");
  outerList.style.marginBottom = "1em";
  for (let index = 0; index < verseGroup.length; index++) {
    // preparing data
    const group = verseGroup[index];
    const randomIndex = Math.floor(Math.random()*memberArr.length);
    const member = memberArr[randomIndex];

    // create list item for outer list
    const outerListItem = document.createElement("li");
    outerListItem.classList.add("list-group-item");
    outerListItem.innerText = `${index + 1}. ${member}`;
    assigmentText = assigmentText + `${index + 1}. ${member}` + "\n";

    // create inner list
    const innerList = document.createElement("ul");
    innerList.classList.add("list-group");
    group.forEach(groupMember => {
      // create inner list item
      const innerListItem = document.createElement("li");
      innerListItem.classList.add("list-group-item");
      innerListItem.innerText = `- Baca surat ${groupMember[0]} dari ayat ${groupMember[1]} sampai ayat ${groupMember[2]}`;
      assigmentText = assigmentText + "\t" + `- Baca surat ${groupMember[0]} dari ayat ${groupMember[1]} sampai ayat ${groupMember[2]}` + "\n";

      // append inner list item to inner list
      innerList.appendChild(innerListItem);
    });

    // append inner list to outer list item
    outerListItem.appendChild(innerList);

    // append list item to outer list
    outerList.appendChild(outerListItem);

    // remove already selected member
    memberArr.splice(randomIndex, 1);
  }
  reportSection.append(outerList);

  const copyButton = document.createElement("button");
  copyButton.innerHTML = "Copy to Clipboard"
  copyButton.setAttribute("type", "button")
  copyButton.setAttribute("onClick", `copyDataTable(this)`);
  copyButton.setAttribute("value", assigmentText);
  copyButton.classList.add("btn");
  copyButton.classList.add("btn-primary");
  copyButton.classList.add("btn-sm");
  copyButton.style.marginBottom = "1em";
  reportSection.append(copyButton);
};

const copyDataTable = (elem) => {
  // https://dev.to/tqbit/how-to-use-javascript-to-copy-text-to-the-clipboard-2hi2
  const cb = navigator.clipboard;
  const juzText = elem.value.split(/\r?\n|\r|\n/g)[0].trim();
  cb.writeText(elem.value).then(() => swal(`${juzText} Berhasil Disalin`));
};

const entryForm = document.querySelector('#entry');
entryForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // clear all report
  const reportSection = document.querySelector("#report-section");
  reportSection.innerHTML = "";

  // generete new report
  const members = document.getElementById("memberSelection").value
  const juzSelection = getJuzSelection();
  juzSelection.forEach(juzNumber => {
    const juz = masterData[juzNumber - 1];
    const verseList = configureVerses(juz, members);
    if (juzNumber == 30) {
      createReportList(verseList, members, juzNumber);
    } else {
      const verseGroup = groupingVerses(verseList);
      createReportList(verseGroup, members, juzNumber);
    }
  });
});