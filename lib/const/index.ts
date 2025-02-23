import { ThienCanEnum, DiaChiEnum } from "../enum";
import type { Star } from "../model";

// Thiên can
export const thienCans = Object.values(ThienCanEnum);

// Địa chi
export const diaChis = Object.values(DiaChiEnum);

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
  { name: "Thiên Hình", type: "major", category: "bad" },
  { name: "Thiên Riêu", type: "major", category: "bad" },
  { name: "Thiên Y", type: "major", category: "good" },
  { name: "Thiên Quan", type: "major", category: "good" },
];
const phuTinhs: Star[] = [
  { name: "Địa Không", type: "minor", category: "bad" },
  { name: "Địa Kiếp", type: "minor", category: "bad" },
  { name: "Văn Xương", type: "minor", category: "good" },
  { name: "Văn Khúc", type: "minor", category: "good" },
  { name: "Thái Tuế", type: "minor", category: "neutral" },
  { name: "Thiên Khôi", type: "minor", category: "good" },
  { name: "Thiên Việt", type: "minor", category: "good" },
  { name: "Long Trì", type: "minor", category: "good" },
  { name: "Phượng Các", type: "minor", category: "good" },
  { name: "Lộc Tồn", type: "minor", category: "good" },
  { name: "Kình Dương", type: "minor", category: "bad" },
  { name: "Đà La", type: "minor", category: "bad" },
  { name: "Hóa Lộc", type: "minor", category: "good" },
  { name: "Hóa Quyền", type: "minor", category: "good" },
  { name: "Hóa Khoa", type: "minor", category: "good" },
  { name: "Hóa Kỵ", type: "minor", category: "bad" },
  { name: "Thiên Khốc", type: "minor", category: "bad" },
  { name: "Thiên Hư", type: "minor", category: "bad" },
  { name: "Thiên Mã", type: "minor", category: "good" },
  { name: "Hồng Loan", type: "minor", category: "good" },
  { name: "Thiên Hỷ", type: "minor", category: "good" },
  { name: "Tam Thai", type: "minor", category: "good" },
  { name: "Bát Tọa", type: "minor", category: "good" },
  { name: "Ân Quang", type: "minor", category: "good" },
  { name: "Thiên Quý", type: "minor", category: "good" },
];
export { chinhTinhs, phuTinhs };
