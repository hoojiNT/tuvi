import { defineStore } from "pinia";
import { gioSinhChiMap, DiaChiEnum } from "~/lib/enum";
import type { Cung, PersonInfo } from "~/lib/model";
import { ref } from "vue";
import {
  AmDuongModule,
  CanChiModule,
  SaoModule,
} from "~/lib/modules/tuvi.module";
import dayjs from "dayjs";

const DEFAULT_PERSON_INFO: PersonInfo = {
  name: "",
  gender: "male",
  birthDate: "",
  birthTime: "",
  birthPlace: "",
};

export const useAstrologyStore = defineStore("astroloz", () => {
  const personInfo = ref<PersonInfo>({ ...DEFAULT_PERSON_INFO });
  const cungVi = ref<Cung[]>([]);
  const cungMenh = ref("");
  const cungThan = ref("");

  const setPersonInfo = (info: PersonInfo) => {
    // Cập nhật thông tin cá nhân
    const birthDate = dayjs(info.birthDate, 'DD/MM/YYYY').toDate();
    console.log("🚀 ~ setPersonInfo ~ info.birthDate:", info.birthDate)
    console.log("🚀 ~ setPersonInfo ~ birthDate:", birthDate)
    personInfo.value = { ...info,  };

    // Khởi tạo 12 cung
    cungVi.value = Array.from({ length: 12 }, (_, index) => ({
      name: Object.values(DiaChiEnum)[index],
      stars: [],
      amDuong: AmDuongModule.xacDinhAmDuong({ position: index + 1 } as Cung),
      position: index + 1,
    }));

    // Lấy thông tin năm sinh, tháng âm lịch và giờ sinh
    const namSinh = birthDate.getFullYear();
    const thangAmLich = birthDate.getMonth() + 1; // Tạm thời dùng tháng dương
    const gioSinh = parseInt(info.birthTime.split(":")[0]);

    // Tính cung mệnh và cung thân
    const thienCan = CanChiModule.xacDinhThienCan(namSinh);
    const diaChi = CanChiModule.xacDinhDiaChi(namSinh);
    console.log("🚀 ~ setPersonInfo ~ diaChi:", diaChi);
    cungMenh.value = `${thienCan} ${diaChi}`;
    cungThan.value = `${thienCan} ${diaChi}`; // Tạm thời giống cung mệnh

    // An các sao
    const cungTuVi = SaoModule.anSaoTuVi(cungVi.value, thangAmLich, gioSinh);
    console.log("🚀 ~ setPersonInfo ~ cungTuVi:", cungTuVi);
    SaoModule.anThaiDuongThaiAm(cungVi.value, cungTuVi);
    SaoModule.anPhuTinh(cungVi.value, cungTuVi);
  };

  return {
    personInfo,
    cungVi,
    cungMenh,
    cungThan,
    setPersonInfo,
  };
});
