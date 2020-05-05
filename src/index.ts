import './imports/typescript_hunds_on';
import './imports/es2015';

interface Profile {
  residence: {
    prefecture: string;
    city: string;
  };
}

function getPrefecture(profile: Profile) {
  return profile.residence.prefecture;
}

console.log(getPrefecture({
  residence: {
    prefecture: '東京都',
    city: '新宿区',
  }
}));

// ES Modules
import equals, { PI, Circle, area } from './imports/esModules';

const circleA = { radius: 3 }
area(circleA)

function circumference({ radius }: Circle) {
  return 2 * PI * Math.pow(radius, 2);
}

equals(circleA, {
  radius: 4,
});