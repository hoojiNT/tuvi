import { defineStore } from "pinia";
import { chinhTinhs, diaChis, phuTinhs, thienCans } from "~/lib/const";
import type { DiaChiEnum } from "~/lib/enum";
import type { Cung, PersonInfo } from "~/lib/model";

export const useAstrologyStore = defineStore("astrology", {
  state: () => ({
    personInfo: {
      name: "",
      gender: "male",
      birthDate: "",
      birthTime: "",
      birthPlace: "",
    } as PersonInfo,

    canChiData: {
      thienCan: thienCans,
      diaChi: diaChis,
    },

    cungMenh: "",
    cungThan: "",
    cungAmDuong: {
      Tý: "Dương",
      Sửu: "Âm",
      Dần: "Dương",
      Mão: "Âm",
      Thìn: "Dương",
      Tị: "Âm",
      Ngọ: "Dương",
      Mùi: "Âm",
      Thân: "Dương",
      Dậu: "Âm",
      Tuất: "Dương",
      Hợi: "Âm",
    } as { [key: string]: "Âm" | "Dương" },
    // Bảng lập thành
    lapThanh: [
      [
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
      ],
      [
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
      ],
      [
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
        "Tý",
        "Sửu",
      ],
      [
        "Thìn",
        "Tị",
        "Ngọ",
        "Mùi",
        "Thân",
        "Dậu",
        "Tuất",
        "Hợi",
        "Tý",
        "Sửu",
        "Dần",
        "Mão",
      ],
      [
        "Ngọ",
        "Mùi",
        "Thân",
        "Dậu",
        "Tuất",
        "Hợi",
        "Tý",
        "Sửu",
        "Dần",
        "Mão",
        "Thìn",
        "Tị",
      ],
      [
        "Thân",
        "Dậu",
        "Tuất",
        "Hợi",
        "Tý",
        "Sửu",
        "Dần",
        "Mão",
        "Thìn",
        "Tị",
        "Ngọ",
        "Mùi",
      ],
      [
        "Tuất",
        "Hợi",
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
      ],
    ],
    gioSinhChiMap: {
      "23:00-0:59": "Tý",
      "1:00-2:59": "Sửu",
      "3:00-4:59": "Dần",
      "5:00-6:59": "Mão",
      "7:00-8:59": "Thìn",
      "9:00-10:59": "Tị",
      "11:00-12:59": "Ngọ",
      "13:00-14:59": "Mùi",
      "15:00-16:59": "Thân",
      "17:00-18:59": "Dậu",
      "19:00-20:59": "Tuất",
      "21:00-22:59": "Hợi",
    },
    chinhTinh: chinhTinhs,
    phuTinh: phuTinhs,
    cungVi: [] as Cung[],
  }),

  actions: {
    setPersonInfo(info: PersonInfo) {
      this.personInfo = info;
    },

    // Lấy chi của giờ sinh
    getGioSinhChi(birthTime: string) {
      const hour = parseInt(birthTime.split(":")[0]);
      const minute = parseInt(birthTime.split(":")[1]);

      for (const [timeRange, chi] of Object.entries(this.gioSinhChiMap)) {
        const [start, end] = timeRange.split("-");
        const [startHour, startMinute] = start.split(":").map(Number);
        const [endHour, endMinute] = end.split(":").map(Number);

        const timeInMinutes = hour * 60 + minute;
        const startInMinutes = startHour * 60 + startMinute;
        const endInMinutes = endHour * 60 + endMinute;

        if (timeInMinutes >= startInMinutes && timeInMinutes <= endInMinutes) {
          return chi;
        }
      }
      return "Tý"; // Mặc định
    },

    // Tính địa chi của năm sinh
    getNamSinhChi(birthYear: number) {
      return this.canChiData.diaChi[birthYear % 12];
    },

    // Tính cung mệnh
    tinhCungMenh() {
      const birthDate = new Date(this.personInfo.birthDate);
      const birthYear = birthDate.getFullYear();
      const namChi = this.getNamSinhChi(birthYear);
      const gioSinhChi = this.getGioSinhChi(
        this.personInfo.birthTime
      ) as DiaChiEnum;

      // Xác định vị trí năm chi trong bảng
      const namChiIndex = this.canChiData.diaChi.indexOf(namChi);
      // Xác định vị trí giờ sinh chi trong bảng
      const gioChiIndex = this.canChiData.diaChi.indexOf(gioSinhChi);

      // Lấy cung mệnh từ bảng lập thành
      this.cungMenh = this.lapThanh?.[namChiIndex]?.[gioChiIndex] ?? "";

      return this.cungMenh;
    },

    // Tính cung thân
    tinhCungThan() {
      const birthDate = new Date(this.personInfo.birthDate);
      const birthMonth = birthDate.getMonth() + 1; // JavaScript months are 0-based
      const birthYear = birthDate.getFullYear();

      // Tính tháng âm lịch (đây là ước lượng đơn giản, cần dùng thư viện âm lịch để chính xác)
      const lunarMonth = birthMonth; // Đơn giản hóa, cần thay bằng conversion thực tế

      // Lấy chi của năm
      const namChi = this.getNamSinhChi(birthYear);
      const namChiIndex = this.canChiData.diaChi.indexOf(namChi);

      // Tính cung thân dựa trên tháng âm lịch
      const thanIndex = (namChiIndex + lunarMonth - 1) % 12;
      this.cungThan = this.canChiData.diaChi[thanIndex];

      return this.cungThan;
    },

    // Kiểm tra âm dương của cung
    kiemTraAmDuong(cung: string) {
      return (
        this.cungAmDuong?.[cung as keyof typeof this.cungAmDuong] || "Dương"
      );
    },

    // An sao Tử Vi và các sao theo
    anSaoTuVi() {
      const tuViCung = this.tinhCungTuVi();
      this.anSaoTheoCung("Tử Vi", tuViCung);

      // An các sao đi theo Tử Vi
      const thienPhuCung = (tuViCung + 4) % 12;
      this.anSaoTheoCung("Thiên Phủ", thienPhuCung);
    },

    // Tính cung đặt sao Tử Vi
    tinhCungTuVi() {
      const birthDate = new Date(this.personInfo.birthDate);
      const lunarMonth = birthDate.getMonth() + 1; // Cần convert sang âm lịch
      const gioSinh = this.getGioSinhChi(this.personInfo.birthTime);

      // Logic tính cung Tử Vi dựa trên tháng âm lịch và giờ sinh
      // Đây là công thức đơn giản hóa, cần điều chỉnh theo sách tử vi
      let cungTuVi =
        (lunarMonth * 2 +
          this.canChiData.diaChi.indexOf(gioSinh as DiaChiEnum)) %
        12;
      return cungTuVi;
    },

    // An các sao Thiên Đồng, Liêm Trinh
    anSaoThienDongLiemTrinh() {
      const tuViCung = this.tinhCungTuVi();

      // Thiên Đồng cách Tử Vi 3 cung
      const thienDongCung = (tuViCung + 3) % 12;
      this.anSaoTheoCung("Thiên Đồng", thienDongCung);

      // Liêm Trinh cách Tử Vi 5 cung
      const liemTrinhCung = (tuViCung + 5) % 12;
      this.anSaoTheoCung("Liêm Trinh", liemTrinhCung);
    },

    // An Thái Dương và Thái Âm
    anSaoThaiDuongThaiAm() {
      const menhCung = this.canChiData.diaChi.indexOf(
        this.cungMenh as DiaChiEnum
      );

      // Thái Dương an theo mệnh
      const thaiDuongCung = (menhCung + 3) % 12;
      this.anSaoTheoCung("Thái Dương", thaiDuongCung);

      // Thái Âm an theo mệnh
      const thaiAmCung = (menhCung + 7) % 12;
      this.anSaoTheoCung("Thái Âm", thaiAmCung);
    },

    // An sao Thiên Cơ
    anSaoThienCo() {
      const tuViCung = this.tinhCungTuVi();
      const thienCoCung = (tuViCung + 2) % 12;
      this.anSaoTheoCung("Thiên Cơ", thienCoCung);
    },

    // An các sao Văn Xương, Văn Khúc
    anSaoVanXuongKhuc() {
      const menhCung = this.canChiData.diaChi.indexOf(
        this.cungMenh as DiaChiEnum
      );

      // Văn Xương
      const vanXuongCung = (menhCung + 4) % 12;
      this.anSaoTheoCung("Văn Xương", vanXuongCung);

      // Văn Khúc
      const vanKhucCung = (menhCung + 8) % 12;
      this.anSaoTheoCung("Văn Khúc", vanKhucCung);
    },

    // Hàm chung để an một sao vào cung
    anSaoTheoCung(tenSao: string, viTri: number) {
      // Tìm thông tin sao
      const sao = [...this.chinhTinh, ...this.phuTinh].find(
        (s) => s.name === tenSao
      );
      if (!sao) return;

      // Nếu cung chưa được khởi tạo, tạo mới
      if (!this.cungVi[viTri]) {
        this.cungVi[viTri] = {
          name: this.canChiData.diaChi[viTri],
          stars: [],
          amDuong: this.kiemTraAmDuong(this.canChiData.diaChi[viTri]),
          position: viTri + 1,
        };
      }

      // Thêm sao vào cung
      this.cungVi[viTri].stars.push(sao);
    },

    // An tất cả các sao
    anTatCaSao() {
      // Khởi tạo 12 cung
      this.cungVi = Array(12)
        .fill(null)
        .map((_, i) => ({
          name: this.canChiData.diaChi[i],
          stars: [],
          amDuong: this.kiemTraAmDuong(this.canChiData.diaChi[i]),
          position: i + 1,
        }));

      // Thứ tự an sao
      this.anSaoTuVi();
      this.anSaoThienDongLiemTrinh();
      this.anSaoThaiDuongThaiAm();
      this.anSaoThienCo();
      this.anSaoVanXuongKhuc();
      // Thêm các hàm an sao khác...
    },
  },
});
