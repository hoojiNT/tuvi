import { ChinhTinhEnum } from "./enum/chinh-tinh.enum";
import { PhuTinhEnum } from "./enum/phu-tinh.enum";
import type { Cung, PersonInfo, Star } from "./model";

export class TuViLibrary {
  private personInfo: PersonInfo;
  private cungMenh: Cung | null = null;
  private cungTuVi: Cung | null = null;
  private cungList: Cung[] = [];

  constructor(personInfo: PersonInfo) {
    this.personInfo = personInfo;
    this.initializeCungs();
  }

  private initializeCungs() {
    // Khởi tạo 12 cung
    for (let i = 0; i < 12; i++) {
      this.cungList.push({
        name: `Cung ${i + 1}`,
        stars: [],
        amDuong: i % 2 === 0 ? "Dương" : "Âm",
        position: i + 1,
      });
    }
  }

  // Tính cung mệnh dựa trên giờ sinh và tháng âm lịch
  public tinhCungMenh(gioSinh: number, thangAmLich: number): Cung {
    // Công thức tính cung mệnh
    let viTriCungMenh = (thangAmLich * 2 + gioSinh) % 12;
    this.cungMenh = this.cungList[viTriCungMenh];
    return this.cungMenh;
  }

  // An sao Tử Vi
  public anSaoTuVi(thangAmLich: number, gioSinh: number): void {
    const viTriTuVi = (thangAmLich * 2 + gioSinh) % 12;
    const saoTuVi: Star = {
      name: ChinhTinhEnum.TuVi,
      type: "major",
      category: "good",
    };
    this.cungList[viTriTuVi].stars.push(saoTuVi);
    this.cungTuVi = this.cungList[viTriTuVi];
  }

  // An Thái Dương và Thái Âm
  public anThaiDuongThaiAm(): void {
    if (!this.cungMenh) return;

    const viTriMenh = this.cungMenh.position - 1;

    // Thái Dương cách mệnh 3 cung
    const viTriThaiDuong = (viTriMenh + 3) % 12;
    const saoThaiDuong: Star = {
      name: ChinhTinhEnum.ThaiDuong,
      type: "major",
      category: "good",
    };
    this.cungList[viTriThaiDuong].stars.push(saoThaiDuong);

    // Thái Âm cách mệnh 7 cung
    const viTriThaiAm = (viTriMenh + 7) % 12;
    const saoThaiAm: Star = {
      name: ChinhTinhEnum.ThaiAm,
      type: "major",
      category: "good",
    };
    this.cungList[viTriThaiAm].stars.push(saoThaiAm);
  }

  // An các sao phụ tinh
  public anPhuTinh(): void {
    if (!this.cungMenh) return;

    // Ví dụ an Địa Không, Địa Kiếp
    const viTriDiaKhong = (this.cungMenh.position + 5) % 12;
    const saoDiaKhong: Star = {
      name: PhuTinhEnum.DiaKhong,
      type: "minor",
      category: "bad",
    };
    this.cungList[viTriDiaKhong].stars.push(saoDiaKhong);

    const viTriDiaKiep = (viTriDiaKhong + 6) % 12;
    const saoDiaKiep: Star = {
      name: PhuTinhEnum.DiaKiep,
      type: "minor",
      category: "bad",
    };
    this.cungList[viTriDiaKiep].stars.push(saoDiaKiep);
  }

  // Lấy thông tin của một cung
  public getCungInfo(position: number): Cung | null {
    return this.cungList[position - 1] || null;
  }

  // Lấy danh sách tất cả các cung
  public getAllCungs(): Cung[] {
    return this.cungList;
  }

  // Kiểm tra xung chiếu giữa các sao
  public kiemTraXungChieu(sao1: Star, sao2: Star): boolean {
    const cung1 = this.timCungChuaSao(sao1);
    const cung2 = this.timCungChuaSao(sao2);

    if (!cung1 || !cung2) return false;

    // Xung: Cách nhau 6 cung
    const khoangCach = Math.abs(cung1.position - cung2.position);
    return khoangCach === 6;
  }

  private timCungChuaSao(sao: Star): Cung | null {
    return (
      this.cungList.find((cung) =>
        cung.stars.some((s) => s.name === sao.name)
      ) || null
    );
  }
}
