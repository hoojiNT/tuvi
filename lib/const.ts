import type { Star } from "./model";

// Thiên can
export const thienCans = [
  "Giáp",
  "Ất",
  "Bính",
  "Đinh",
  "Mậu",
  "Kỷ",
  "Canh",
  "Tân",
  "Nhâm",
  "Quý",
];

// Địa chi
export const diaChis = [
  "Tý",
  "Sửu",
  "Dần",
  "Mão",
  "Thìn",
  "Tị",
  "Ngọ",
  "Mùi",
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
];

const chinhTinhs: Star[] = [
  { name: "Tử Vi", type: "major", category: "good" },
  { name: "Thiên Cơ", type: "major", category: "good" },
  { name: "Thái Dương", type: "major", category: "good" },
  { name: "Vũ Khúc", type: "major", category: "neutral" },
  { name: "Thiên Đồng", type: "major", category: "good" },
  { name: "Liêm Trinh", type: "major", category: "neutral" },
  { name: "Thiên Phủ", type: "major", category: "good" },
  { name: "Thái Âm", type: "major", category: "good" },
  { name: "Tham Lang", type: "major", category: "neutral" },
  { name: "Cự Môn", type: "major", category: "neutral" },
  { name: "Thiên Tướng", type: "major", category: "good" },
  { name: "Thiên Lương", type: "major", category: "good" },
  { name: "Thất Sát", type: "major", category: "bad" },
  { name: "Phá Quân", type: "major", category: "bad" },
];
const phuTinhs: Star[] = [
  { name: "Địa Không", type: "minor", category: "bad" },
  { name: "Địa Kiếp", type: "minor", category: "bad" },
  { name: "Văn Xương", type: "minor", category: "good" },
  { name: "Văn Khúc", type: "minor", category: "good" },
  { name: "Thái Tuế", type: "minor", category: "neutral" },
  { name: "Long Trì", type: "minor", category: "good" },
  { name: "Phượng Các", type: "minor", category: "good" },
  // ... Thêm các phụ tinh khác
];

export { chinhTinhs, phuTinhs };
