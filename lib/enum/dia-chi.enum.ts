export enum DiaChiEnum {
  Ty = "Tý",
  Suu = "Sửu",
  Dan = "Dần",
  Mao = "Mão",
  Thin = "Thìn",
  Ti = "Tị",
  Ngo = "Ngọ",
  Mui = "Mùi",
  Than = "Thân",
  Dau = "Dậu",
  Tuat = "Tuất",
  Hoi = "Hợi",
}

export const gioSinhChiMap = {
  "23:00-0:59": DiaChiEnum.Ty,
  "1:00-2:59": DiaChiEnum.Suu,
  "3:00-4:59": DiaChiEnum.Dan,
  "5:00-6:59": DiaChiEnum.Mao,
  "7:00-8:59": DiaChiEnum.Thin,
  "9:00-10:59": DiaChiEnum.Ti,
  "11:00-12:59": DiaChiEnum.Ngo,
  "13:00-14:59": DiaChiEnum.Mui,
  "15:00-16:59": DiaChiEnum.Than,
  "17:00-18:59": DiaChiEnum.Dau,
  "19:00-20:59": DiaChiEnum.Tuat,
  "21:00-22:59": DiaChiEnum.Hoi,
};