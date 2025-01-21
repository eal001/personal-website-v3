export class Style_Config {
    light_colors = {
        background_color: "rgb(234, 227, 211)",
        text_color: "rgb(44, 66, 81)",
        accent_color: "rgb(232, 64, 40)",
        accent_interaction_color: "rgb(252, 93, 76)",
        content_color: "rgb(235, 235, 235)",
        detail_color: "rgb(240, 240, 240)",
        transparent_widget_color: "rgb(255,255,255, 0.25)"
    };
    darkColors = {
        background_color: "rgb(13, 19, 19)",
        text_color: "rgb(163, 155, 168)",
        accent_color: "rgb(236, 164, 0)",
        accent_interaction_color: "rgb(255, 255, 0)",
        content_color: "rgb(22, 7, 10)",
        detail_color: "rgb(18, 10, 12)",
        transparent_widget_color: "rgb(0,0,0, 0.25)"
    }
    switch_transition = "transform 250ms ease-out";

    /**
     * sets the color variables to the configured values
     * @param {string either light or dark} theme 
     */
    set_colors_to_css_variables(theme) {

        console.log("setting css variables");
        if (theme != "light" && theme != "dark") {
            throw new Error(`theme '${theme}' not supported`);
        }
        const style = document.documentElement.style;
        const colors = (theme == "light") ? this.light_colors : this.darkColors;
        style.setProperty("--background-color", colors.background_color);
        style.setProperty("--text-color", colors.text_color);
        style.setProperty("--accent-color",colors.accent_color);
        style.setProperty("--accent-interaction-color", colors.accent_interaction_color);
        style.setProperty("--content-color", colors.content_color);
        style.setProperty("--detail-color", colors.detail_color);
        style.setProperty("--transparent-widget-color", colors.transparent_widget_color);
    }
}