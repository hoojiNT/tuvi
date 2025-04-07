import { ChinhTinhEnum } from "../enum/chinh-tinh.enum";
import { PhuTinhEnum } from "../enum/phu-tinh.enum";
import type { Cung, Star } from "../model";

export class SaoModule {
  /**
   * An sao Tử Vi vào cung
   * @param cungList Danh sách các cung
   * @param thangAmLich Tháng âm lịch
   * @param gioSinh Giờ sinh
   * @returns Cung chứa sao Tử Vi
   */
  public static anSaoTuVi(
    cungList: Cung[],
    thangAmLich: number,
    gioSinh: number
  ): Cung {
    const viTriTuVi = (thangAmLich * 2 + gioSinh) % 12;
    console.log("🚀 ~ SaoModule ~ viTriTuVi:", viTriTuVi)
    const saoTuVi: Star = {
      name: ChinhTinhEnum.TuVi,
      type: "major",
      category: "good",
    };
    console.log("🚀 ~ SaoModule ~ cungList:", cungList)
    cungList[viTriTuVi].stars.push(saoTuVi);
    return cungList[viTriTuVi];
  }

  /**
   * An Thái Dương và Thái Âm vào cung
   * @param cungList Danh sách các cung
   * @param cungMenh Cung mệnh
   */
  public static anThaiDuongThaiAm(cungList: Cung[], cungMenh: Cung): void {
    const viTriMenh = cungMenh.position - 1;

    // An các sao chính tinh theo thứ tự
    const chinhTinhConfig = [
      { sao: ChinhTinhEnum.ThaiDuong, offset: 3 },
      { sao: ChinhTinhEnum.ThienCo, offset: 4 },
      { sao: ChinhTinhEnum.ThienDong, offset: 5 },
      { sao: ChinhTinhEnum.LiemTrinh, offset: 6 },
      { sao: ChinhTinhEnum.ThaiAm, offset: 7 },
      { sao: ChinhTinhEnum.ThamLang, offset: 8 },
      { sao: ChinhTinhEnum.CuMon, offset: 9 },
      { sao: ChinhTinhEnum.ThienTuong, offset: 10 },
      { sao: ChinhTinhEnum.ThienLuong, offset: 11 },
    ];

    chinhTinhConfig.forEach(({ sao, offset }) => {
      const viTriSao = (viTriMenh + offset) % 12;
      const newSao: Star = {
        name: sao,
        type: "major",
        category: "good",
      };
      cungList[viTriSao].stars.push(newSao);
    });
  }

  /**
   * An các sao phụ tinh
   * @param cungList Danh sách các cung
   * @param cungMenh Cung mệnh
   */
  public static anPhuTinh(cungList: Cung[], cungMenh: Cung): void {
    const viTriMenh = cungMenh.position - 1;

    // An các sao phụ tinh
    const phuTinhConfig = [
      { sao: PhuTinhEnum.DiaKhong, offset: 5, category: "bad" },
      { sao: PhuTinhEnum.DiaKiep, offset: 11, category: "bad" },
      { sao: PhuTinhEnum.VanXuong, offset: 2, category: "good" },
      { sao: PhuTinhEnum.VanKhuc, offset: 8, category: "good" },
      { sao: PhuTinhEnum.ThienKhoi, offset: 1, category: "good" },
      { sao: PhuTinhEnum.ThienViet, offset: 7, category: "good" },
      { sao: PhuTinhEnum.LongTri, offset: 3, category: "good" },
      { sao: PhuTinhEnum.PhuongCac, offset: 9, category: "good" },
      { sao: PhuTinhEnum.LocTon, offset: 4, category: "good" },
      { sao: PhuTinhEnum.HoaLoc, offset: 6, category: "good" },
      { sao: PhuTinhEnum.HoaQuyen, offset: 10, category: "good" },
    ];

    phuTinhConfig.forEach(({ sao, offset, category }) => {
      const viTriSao = (viTriMenh + offset) % 12;
      const newSao: Star = {
        name: sao,
        type: "minor",
        category: category as any,
      };
      cungList[viTriSao].stars.push(newSao);
    });
  }

  /**
   * Kiểm tra xung chiếu giữa hai sao
   * @param sao1 Sao thứ nhất
   * @param sao2 Sao thứ hai
   * @param cungList Danh sách các cung
   * @returns true nếu hai sao xung chiếu, false nếu không
   */
  public static kiemTraXungChieu(
    sao1: Star,
    sao2: Star,
    cungList: Cung[]
  ): boolean {
    const cung1 = this.timCungChuaSao(sao1, cungList);
    const cung2 = this.timCungChuaSao(sao2, cungList);

    if (!cung1 || !cung2) return false;

    // Xung: Cách nhau 6 cung
    const khoangCach = Math.abs(cung1.position - cung2.position);
    return khoangCach === 6;
  }

  /**
   * Tìm cung chứa một sao cụ thể
   * @param sao Sao cần tìm
   * @param cungList Danh sách các cung
   * @returns Cung chứa sao hoặc null nếu không tìm thấy
   */
  private static timCungChuaSao(sao: Star, cungList: Cung[]): Cung | null {
    return (
      cungList.find((cung) => cung.stars.some((s) => s.name === sao.name)) ||
      null
    );
  }
}
