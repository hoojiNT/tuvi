import { ThienCanEnum } from "../enum/thien-can.enum";
import { DiaChiEnum } from "../enum/dia-chi.enum";

export class CanChiModule {
  /**
   * Xác định thiên can dựa trên năm sinh
   * @param namSinh Năm sinh dương lịch
   * @returns Thiên can tương ứng
   */
  public static xacDinhThienCan(namSinh: number): ThienCanEnum {
    const canIndex = (namSinh - 4) % 10;
    return Object.values(ThienCanEnum)[canIndex];
  }

  /**
   * Xác định địa chi dựa trên năm sinh
   * @param namSinh Năm sinh dương lịch
   * @returns Địa chi tương ứng
   */
  public static xacDinhDiaChi(namSinh: number): DiaChiEnum {
    const chiIndex = (namSinh - 4) % 12;
    return Object.values(DiaChiEnum)[chiIndex];
  }

  /**
   * Kiểm tra xem hai can có tương hợp không
   * @param can1 Can thứ nhất
   * @param can2 Can thứ hai
   * @returns true nếu tương hợp, false nếu không
   */
  public static kiemTraCanTuongHop(can1: ThienCanEnum, can2: ThienCanEnum): boolean {
    const tuongHopPairs = [
      [ThienCanEnum.Giap, ThienCanEnum.Ky],
      [ThienCanEnum.At, ThienCanEnum.Canh],
      [ThienCanEnum.Binh, ThienCanEnum.Tan],
      [ThienCanEnum.Dinh, ThienCanEnum.Nham],
      [ThienCanEnum.Mau, ThienCanEnum.Quy]
    ];

    return tuongHopPairs.some(pair => 
      (pair[0] === can1 && pair[1] === can2) || 
      (pair[0] === can2 && pair[1] === can1)
    );
  }

  /**
   * Kiểm tra xem hai chi có tam hợp không
   * @param chi1 Chi thứ nhất
   * @param chi2 Chi thứ hai
   * @returns true nếu tam hợp, false nếu không
   */
  public static kiemTraChiTamHop(chi1: DiaChiEnum, chi2: DiaChiEnum): boolean {
    const tamHopGroups = [
      [DiaChiEnum.Ty, DiaChiEnum.Than, DiaChiEnum.Thin],
      [DiaChiEnum.Dan, DiaChiEnum.Ngo, DiaChiEnum.Tuat],
      [DiaChiEnum.Mao, DiaChiEnum.Mui, DiaChiEnum.Hoi],
      [DiaChiEnum.Thin, DiaChiEnum.Tuat, DiaChiEnum.Suu]
    ];

    return tamHopGroups.some(group => 
      group.includes(chi1) && group.includes(chi2)
    );
  }

  /**
   * Kiểm tra xem hai chi có lục hợp không
   * @param chi1 Chi thứ nhất
   * @param chi2 Chi thứ hai
   * @returns true nếu lục hợp, false nếu không
   */
  public static kiemTraChiLucHop(chi1: DiaChiEnum, chi2: DiaChiEnum): boolean {
    const lucHopPairs = [
      [DiaChiEnum.Ty, DiaChiEnum.Suu],
      [DiaChiEnum.Dan, DiaChiEnum.Hoi],
      [DiaChiEnum.Mao, DiaChiEnum.Tuat],
      [DiaChiEnum.Thin, DiaChiEnum.Dau],
      [DiaChiEnum.Ngo, DiaChiEnum.Than],
      [DiaChiEnum.Mui, DiaChiEnum.Thin]
    ];

    return lucHopPairs.some(pair => 
      (pair[0] === chi1 && pair[1] === chi2) || 
      (pair[0] === chi2 && pair[1] === chi1)
    );
  }
}