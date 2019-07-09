import * as Services from "./ServicesConstants";
import { Icons } from "./IconConstants";

const FontStyles = {
  SMALL: "15px",
  MEDIUM: "20px",
  LARGE: "30px"
};

const Menus = {
  DASHBOARD: "Dashboard",
  CAST: "Cast",
  CREW: "Crew",
  EQUIPMENTS: "Equipments",
  APPROVALS: "Approvals",
  HERO_AUDITION: "Hero Audition",
  HEROINE_AUDITION: "Heroine Audition",
  COLLECTION: "Collections",
  SCRIPTS:'Scripts',
  OVERVIEW:'Overview'
};

const Notifications ={
  SUCCESS:'success',
  WARNING:'warning',
  INFO:'info',
  ERROR:'error',
  SUCCESS_CAP:'Success',
  WARNING_CAP:'Warning',
  INFO_CAP:'Info',
  ERROR_CAP:'Error'
}

export { Menus, Icons, FontStyles, Services, Notifications };
