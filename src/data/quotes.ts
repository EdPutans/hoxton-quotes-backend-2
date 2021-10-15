export type Reference = {
  quote: string;
  id: number;
  person: {
    first_name: string;
    last_name: string;
    age: number;
    image_url: string;
  };
};

const quotes: Reference[] = [
  {
    quote: "Pink isn't just a color, it's an attitude!",
    id: 1,
    person: {
      first_name: "Miley",
      last_name: "Cyrus",
      age: 28,
      image_url:
        "https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/Miley-Cyrus-03_MidnightSky_WhiteLight_2302.jpg",
    },  
  },    
  {
    quote: "I go out with friends, but I don't have time to get in trouble.",
    id:2,
    person: {
      first_name: "Britney",
      last_name: "Spears",
      age: 39,
      image_url:
        "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/07/931/524/Britney_Spears_Getty_Images.jpg?ve=1&tl=1",
    },
  },
  {
    quote: "Don't take advice from people like me who have gotten very lucky",
    id:3,
    person: {
      first_name: "Bo",
      last_name: "Burnham",
      age: 31,
      image_url:
      "https://i1.sndcdn.com/artworks-000339121494-knkqhn-t500x500.jpg" 
    },
  },
];

export default quotes;
