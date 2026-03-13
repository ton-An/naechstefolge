import type { LucideIcon } from "lucide-vue-next";

import type { MessagePath } from "@/i18n/i18n";

export interface CustomSelectorOption {
  i18nKey: MessagePath;
  id: string;
  icon: LucideIcon;
}
