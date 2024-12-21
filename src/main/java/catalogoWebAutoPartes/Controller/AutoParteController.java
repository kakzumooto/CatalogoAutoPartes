package catalogoWebAutoPartes.Controller;

import catalogoWebAutoPartes.entidad.AutoParte;
import catalogoWebAutoPartes.service.AutoParteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/autopartes")
@CrossOrigin(origins = "https://performanceday.com.mx")
public class AutoParteController {

    @Autowired
    private AutoParteService autoParteService;

    
    @GetMapping("/categoria")
    public Page<AutoParte> getAutoPartesByCategoria(@RequestParam String categoria, Pageable pageable) {
        System.out.println("Parámetro recibido: " + categoria);
        return autoParteService.findByCategoria(categoria, pageable);
    }

}
