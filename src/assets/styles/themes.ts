import color from 'assets/styles/colors';
import font from 'assets/styles/fonts';
import device from 'assets/styles/device';

export const themes = {
    light: {
        palette: {
            primary: color.green,
            text: color.black,
            background: color.white,

            error: color.red,
            success: color.green,
            info: color.blue,
            warning: color.yellow,

            color,
        },
        font,
        device,
    },
    dark: {
        palette: {
            primary: color.green,
            text: color.black,
            background: color.black,

            error: color.red,
            success: color.green,
            info: color.blue,
            warning: color.yellow,

            color,
        },
        font,
        device,
    },
};
