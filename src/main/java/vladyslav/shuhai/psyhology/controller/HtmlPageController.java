package vladyslav.shuhai.psyhology.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HtmlPageController {

    @RequestMapping("/")
    public String main() {
        return "index.html";
    }
    @RequestMapping("/groupLessons")
    public String grop() {
        return "index.html";
    }
    @RequestMapping("/soloLessons")
    public String solo() {
        return "index.html";
    }
}
