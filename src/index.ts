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