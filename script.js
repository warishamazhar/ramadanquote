const quotes = [
  {
    arabic: "الصوم جنة يستجن بها العبد من النار",
    translation:
      "Fasting is a shield with which a servant protects himself from the Fire. - Hadith",
  },
  {
    arabic: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ",
    translation:
      "Indeed, prayer prohibits immorality and wrongdoing. - Quran 29:45",
  },
  {
    arabic: "خَيْرُكُمْ أَحْسَنُكُمْ أَخْلَاقًا",
    translation:
      "The best among you are those who have the best manners and character. - Hadith",
  },
  {
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation:
      "And whoever puts his trust in Allah, then He will suffice him. - Quran 65:3",
  },
  {
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation:
      "Allah does not burden a soul beyond that it can bear. - Quran 2:286",
  },
  {
    arabic: "اللهم إنك عفو تحب العفو فاعف عني",
    translation:
      "O Allah, You are forgiving and love forgiveness, so forgive me. - Dua for Ramadan",
  },
  {
    arabic: "إِنَّمَا يُوَفَّى ٱلصَّـٰبِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ",
    translation:
      "Indeed, the patient will be given their reward without account. - Quran 39:10",
  },
  {
    arabic: "وَقُولُوا۟ لِلنَّاسِ حُسْنًۭا",
    translation: "And speak to people good words. - Quran 2:83",
  },
  {
    arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًۭا",
    translation: "Indeed, with hardship comes ease. - Quran 94:6",
  },
  {
    arabic:
      "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    translation:
      "Whoever fasts Ramadan out of faith and seeking reward, his past sins will be forgiven. - Hadith",
  },
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex].arabic;
  document.getElementById("translation").innerText =
    quotes[randomIndex].translation;
}
