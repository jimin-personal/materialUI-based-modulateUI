import {makeAppStyles} from "@/lib/styleHelper";

export const useExportButtonStyles = makeAppStyles((theme) => ({
  listDownloadButton: {
    height: '100%',
    color: theme.palette.text.contrast
  },
}));
