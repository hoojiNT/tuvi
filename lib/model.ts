interface PersonInfo {
  name: string;
  gender: "male" | "female";
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

interface Star {
  name: string;
  type: "major" | "minor" | "support"; // Chính tinh, phụ tinh, trợ tinh
  category: "good" | "bad" | "neutral"; // Cát tinh, hung tinh, bình hòa
}

interface Cung {
  name: string;
  stars: Star[];
  amDuong: "Âm" | "Dương";
  position: number; // Vị trí từ 1-12
}

type LuongNghi = "Dương" | "Âm";

export type { Cung, PersonInfo, Star, LuongNghi };
