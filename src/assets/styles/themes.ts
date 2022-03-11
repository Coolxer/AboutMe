import color from 'assets/styles/colors';
import font from 'assets/styles/fonts';
import device from 'assets/styles/device';

export const themes = {
    light: {
        palette: {
            primary: color.green,
            background: color.white,
        },
        font,
        device,
    },
    dark: {
        palette: {
            primary: color.green,
            background: color.black,
        },
        font,
        device,
    },
};
