import { type Cung, type LuongNghi } from "../model";

export class AmDuongModule {
  /**
   * Xác định tính âm dương của một cung
   * @param cung Cung cần xác định
   * @returns "Âm" hoặc "Dương"
   */
  public static xacDinhAmDuong(cung: Cung): LuongNghi {
    return cung.position % 2 === 0 ? "Dương" : "Âm";
  }

  /**
   * Kiểm tra xem hai cung có cùng tính âm dương không
   * @param cung1 Cung thứ nhất
   * @param cung2 Cung thứ hai
   * @returns true nếu cùng âm dương, false nếu khác
   */
  public static kiemTraCungAmDuong(cung1: Cung, cung2: Cung): boolean {
    return this.xacDinhAmDuong(cung1) === this.xacDinhAmDuong(cung2);
  }

  /**
   * Kiểm tra xem hai cung có tương sinh không
   * @param cung1 Cung thứ nhất
   * @param cung2 Cung thứ hai
   * @returns true nếu tương sinh, false nếu không
   */
  public static kiemTraTuongSinh(cung1: Cung, cung2: Cung): boolean {
    const khoangCach = Math.abs(cung1.position - cung2.position);
    return khoangCach === 4 || khoangCach === 8; // Tứ sinh hoặc Bát sinh
  }

  /**
   * Kiểm tra xem hai cung có tương khắc không
   * @param cung1 Cung thứ nhất
   * @param cung2 Cung thứ hai
   * @returns true nếu tương khắc, false nếu không
   */
  public static kiemTraTuongKhac(cung1: Cung, cung2: Cung): boolean {
    const khoangCach = Math.abs(cung1.position - cung2.position);
    return khoangCach === 3 || khoangCach === 6; // Tam khắc hoặc Lục khắc
  }
}
