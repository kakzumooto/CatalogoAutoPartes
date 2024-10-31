package catalogoWebAutoPartes.service;

import catalogoWebAutoPartes.entidad.AutoParte;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface AutoParteService {
    Page<AutoParte> findByCategoria(String categoria, Pageable pageable);
}