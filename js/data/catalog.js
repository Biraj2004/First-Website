(function attachCatalog(global) {
  const featured = [
    {
      id: "peaky-blinders",
      title: "Peaky Blinders",
      meta: "Crime, Drama | 2021 | 142 min",
      description: "A post-war empire rises in Birmingham where every move has a cost.",
      image: "images/hero page/3.jpg",
      link: "https://movies4us.co/series/peaky-blinders/",
      genre: "Drama",
      language: "English"
    },
    {
      id: "tenet",
      title: "Tenet",
      meta: "Action, Sci-Fi | 2020 | 150 min",
      description: "An agent enters a world of time inversion to stop a global catastrophe.",
      image: "images/hollywood/2.jpg",
      link: "https://dotmovies.tokyo/",
      genre: "Action",
      language: "English"
    },
    {
      id: "bheeshma",
      title: "Bheeshma",
      meta: "Romance, Action | 2020 | 138 min",
      description: "A carefree man suddenly leads an organic farming company under pressure.",
      image: "images/telugumovies/a.jpg",
      link: "https://dotmovies.tokyo/",
      genre: "Romance",
      language: "Telugu"
    }
  ];

  const categories = [
    {
      id: "trending",
      name: "Trending Now",
      description: "Fresh picks currently popular with Free TV viewers.",
      items: [
        {
          id: "12th-fail",
          title: "12th Fail",
          genre: "Drama",
          language: "Hindi",
          year: 2023,
          image: "images/horizantal/1.1.jpeg",
          link: "https://movies4us.co/movies/12th-fail/"
        },
        {
          id: "marvels",
          title: "The Marvels",
          genre: "Action",
          language: "English",
          year: 2023,
          image: "images/horizantal/5.jpg",
          link: "https://movies4us.co/movies/the-marvels/"
        },
        {
          id: "animal",
          title: "Animal",
          genre: "Action",
          language: "Hindi",
          year: 2023,
          image: "images/horizantal/3.1.jpeg",
          link: "https://dotmovies.tokyo/56645-animal-2023-hindi-pre-dvdrip-720p-480p.html"
        },
        {
          id: "wonka",
          title: "Wonka",
          genre: "Fantasy",
          language: "English",
          year: 2023,
          image: "images/horizantal/1.jpeg",
          link: "https://movies4us.co/movies/wonka/"
        },
        {
          id: "balloon",
          title: "Balloon",
          genre: "Thriller",
          language: "Tamil",
          year: 2017,
          image: "images/horizantal/2.jpg",
          link: "https://www.youtube.com/watch?v=UliuPWSE700&pp=ygUNYmFsbG9vbiBtb3ZpZQ%3D%3D"
        }
      ]
    },
    {
      id: "hollywood",
      name: "Hollywood",
      description: "Action-forward stories from global studios.",
      items: [
        { id: "hol-tenet", title: "Tenet", genre: "Sci-Fi", language: "English", year: 2020, image: "images/hollywood/2.jpg", link: "https://dotmovies.tokyo/" },
        { id: "hol-ww84", title: "WW 84", genre: "Action", language: "English", year: 2020, image: "images/hollywood/12.jpg", link: "https://dotmovies.tokyo/" },
        { id: "hol-mortal", title: "Mortal", genre: "Fantasy", language: "English", year: 2020, image: "images/hollywood/14.jpg", link: "https://dotmovies.tokyo/" },
        { id: "hol-reunion", title: "Reunion", genre: "Mystery", language: "English", year: 2020, image: "images/hollywood/1.jpg", link: "https://dotmovies.tokyo/" }
      ]
    },
    {
      id: "telugu",
      name: "Tollywood",
      description: "Telugu cinema favorites across commercial and drama genres.",
      items: [
        { id: "tel-bheeshma", title: "Bheeshma", genre: "Romance", language: "Telugu", year: 2020, image: "images/telugumovies/a.jpg", link: "https://dotmovies.tokyo/" },
        { id: "tel-bimbisara", title: "Bimbisara", genre: "Fantasy", language: "Telugu", year: 2022, image: "images/telugumovies/16.jpg", link: "https://dotmovies.tokyo/" },
        { id: "tel-vakeel", title: "Vakeel Sab", genre: "Drama", language: "Telugu", year: 2021, image: "images/telugumovies/27.jpg", link: "https://dotmovies.tokyo/" },
        { id: "tel-jersey", title: "Jersey", genre: "Sports", language: "Telugu", year: 2019, image: "images/telugumovies/26.jpg", link: "https://dotmovies.tokyo/" }
      ]
    },
    {
      id: "malayalam",
      name: "Mollywood",
      description: "Strong narratives from Malayalam cinema.",
      items: [
        { id: "mal-drishyam", title: "Drishyam 2", genre: "Thriller", language: "Malayalam", year: 2021, image: "images/malayalam/1.jpg", link: "https://dotmovies.tokyo/" },
        { id: "mal-cia", title: "CIA", genre: "Action", language: "Malayalam", year: 2017, image: "images/malayalam/5.jpg", link: "https://dotmovies.tokyo/" },
        { id: "mal-licence", title: "Driving Licence", genre: "Drama", language: "Malayalam", year: 2019, image: "images/malayalam/6.jpg", link: "https://dotmovies.tokyo/" },
        { id: "mal-1971", title: "1971", genre: "War", language: "Malayalam", year: 2014, image: "images/malayalam/7.jpg", link: "https://dotmovies.tokyo/" }
      ]
    },
    {
      id: "tamil",
      name: "Kollywood",
      description: "Tamil releases from romance, thrillers, and commercial masala.",
      items: [
        { id: "tam-meesaya", title: "Meesaya Muruku", genre: "Drama", language: "Tamil", year: 2017, image: "images/tamil/a.jpg", link: "https://dotmovies.tokyo/" },
        { id: "tam-96", title: "96", genre: "Romance", language: "Tamil", year: 2018, image: "images/tamil/b.jpg", link: "https://dotmovies.tokyo/" },
        { id: "tam-ganga", title: "Ganga", genre: "Horror", language: "Tamil", year: 2015, image: "images/tamil/c.jpg", link: "https://dotmovies.tokyo/" },
        { id: "tam-dev", title: "Dev", genre: "Adventure", language: "Tamil", year: 2019, image: "images/tamil/d.jpg", link: "https://dotmovies.tokyo/" }
      ]
    },
    {
      id: "kannada",
      name: "Sandalwood",
      description: "Kannada crowd-pleasers from different decades.",
      items: [
        { id: "kan-googly", title: "Googly", genre: "Comedy", language: "Kannada", year: 2013, image: "images/kannada/a.jpg", link: "https://dotmovies.tokyo/" },
        { id: "kan-adyaksha", title: "Adyaksha", genre: "Comedy", language: "Kannada", year: 2014, image: "images/kannada/f.jpg", link: "https://dotmovies.tokyo/" },
        { id: "kan-apoorva", title: "Apoorva", genre: "Drama", language: "Kannada", year: 2016, image: "images/kannada/e.jpg", link: "https://dotmovies.tokyo/" },
        { id: "kan-birbal", title: "Birbal", genre: "Thriller", language: "Kannada", year: 2019, image: "images/kannada/b.jpg", link: "https://dotmovies.tokyo/" }
      ]
    }
  ];

  const ytSeries = [
    { id: "yt-aspirants", title: "Aspirants", genre: "Series", language: "Hindi", year: 2021, image: "images/yt/1.jpg", link: "https://youtube.com/playlist?list=PLLeoZL72zI-xNXCPO5BjoU1hyUs5NeHEY&si=Q7zNG8abLfDQHo6i" },
    { id: "yt-kota", title: "Kota Factory", genre: "Series", language: "Hindi", year: 2020, image: "images/yt/2.jpg", link: "https://youtube.com/playlist?list=PLLeoZL72zI-xNXCPO5BjoU1hyUs5NeHEY&si=Q7zNG8abLfDQHo6i" },
    { id: "yt-software", title: "Software Dev", genre: "Series", language: "Telugu", year: 2019, image: "images/yt/3.jpg", link: "https://youtube.com/playlist?list=PLLeoZL72zI-xNXCPO5BjoU1hyUs5NeHEY&si=Q7zNG8abLfDQHo6i" },
    { id: "yt-sexlife", title: "Sex Life", genre: "Series", language: "English", year: 2020, image: "images/yt/4.jpg", link: "https://youtube.com/playlist?list=PLLeoZL72zI-xNXCPO5BjoU1hyUs5NeHEY&si=Q7zNG8abLfDQHo6i" }
  ];

  const allCatalogItems = categories.flatMap((category) =>
    category.items.map((item) => ({ ...item, category: category.name }))
  );

  global.FreeTVData = {
    featured,
    categories,
    ytSeries,
    allCatalogItems
  };
})(window);
