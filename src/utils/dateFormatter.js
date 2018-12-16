import { format } from "date-fns";

export const formatDateForDisplay = date => format(date, "d MMMM yyyy");
export const formatDateForPersistence = date =>
  format(date, "yyyy-MM-dd HH:mm");
