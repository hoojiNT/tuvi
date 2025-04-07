import { defineStore } from "pinia";
import { gioSinhChiMap, type DiaChiEnum } from "~/lib/enum";
import type { Cung, PersonInfo } from "~/lib/model";
import { TuViLibrary } from "~/lib/tuvi.lib";
import { ref } from "vue";
import { diaChis, thienCans } from "~/lib/const";

const cungAmDuong = {
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
} as { [key: string]: "Âm" | "Dương" };

// Bảng lập thành
const lapThanh = [
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
];

// Kiểm tra âm dương của cung
const kiemTraAmDuong = (cung: string) => {
  return cungAmDuong?.[cung as keyof typeof cungAmDuong] || "Dương";
};

const canChiData = {
  thienCan: thienCans,
  diaChi: diaChis,
};
export const useAstrologyStore = defineStore("astroloz", () => {
  const personInfo = ref({
    name: "",
    gender: "male",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
  } as PersonInfo);
  const setPersonInfo  = (e: PersonInfo) =>
    (personInfo.value = e ? e : {
      name: "Nguyễn Văn A",
      gender: "male",
      birthDate: "2000-01-01",
      birthTime: "06:00",
      birthPlace: "Hà Nội",
    });

  const tuViLib = ref<TuViLibrary | null>(null);
  const cungVi = ref<Cung[]>([] as Cung[]);
  const cungMenh = ref("");
  const cungThan = ref("");

  const initializeTuViLib = () => {
    tuViLib.value = new TuViLibrary(personInfo.value);
  };

  const getGioSinhChi = (): DiaChiEnum => {
    const hour = parseInt(personInfo.value.birthTime.split(":")[0]);
    const minute = parseInt(personInfo.value.birthTime.split(":")[1] || "0");

    for (const [timeRange, chi] of Object.entries(gioSinhChiMap)) {
      const [start, end] = timeRange.split("-");
      const [startHour, startMinute] = start.split(":").map(Number);
      const [endHour, endMinute] = end.split(":").map(Number);

      const timeInMinutes = hour * 60 + minute;
      const startInMinutes = startHour * 60 + startMinute;
      const endInMinutes = endHour * 60 + endMinute;

      if (timeInMinutes >= startInMinutes && timeInMinutes <= endInMinutes) {
        return chi as DiaChiEnum;
      }
    }
    return "Tý" as DiaChiEnum;
  };

  const tinhCungMenh = () => {
    if (!tuViLib.value) return null;

    const gioSinh = parseInt(personInfo.value.birthTime.split(":")[0]);
    const birthDate = new Date(personInfo.value.birthDate);
    const thangAmLich = birthDate.getMonth() + 1; // Tạm thời sử dụng tháng dương

    const cung = tuViLib.value.tinhCungMenh(gioSinh, thangAmLich);
    cungMenh.value = cung.name;
    return cung;
  };

  const tinhCungThan = () => {
    if (!tuViLib.value) return null;

    const birthDate = new Date(personInfo.value.birthDate);
    const thangAmLich = birthDate.getMonth() + 1;

    const cung = tuViLib.value.getCungInfo(thangAmLich);
    if (cung) {
      cungThan.value = cung.name;
    }
    return cung;
  };

  const anTatCaSao = () => {
    if (!tuViLib.value) return;

    const gioSinh = parseInt(personInfo.value.birthTime.split(":")[0]);
    const thangAmLich = new Date(personInfo.value.birthDate).getMonth() + 1;

    tuViLib.value.anSaoTuVi(thangAmLich, gioSinh);
    tuViLib.value.anThaiDuongThaiAm();
    tuViLib.value.anPhuTinh();

    cungVi.value = tuViLib.value.getAllCungs();
  };

  const getCungInfo = (position: number) => {
    return tuViLib.value?.getCungInfo(position) || null;
  };

  const getAllCungs = () => {
    return tuViLib.value?.getAllCungs() || [];
  };

  return {
    personInfo,
    setPersonInfo,
    tuViLib,
    initializeTuViLib,
    cungVi,
    cungMenh,
    cungThan,
    tinhCungMenh,
    tinhCungThan,
    anTatCaSao,
    getCungInfo,
    getAllCungs,
  };
});
// Xóa store legacy vì đã được thay thế bằng useAstrologyStore mới
