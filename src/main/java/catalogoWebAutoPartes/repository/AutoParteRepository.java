package catalogoWebAutoPartes.repository;

import catalogoWebAutoPartes.entidad.AutoParte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AutoParteRepository extends JpaRepository<AutoParte, Long> {


    Page<AutoParte> findByCategoria(String categoria, Pageable pageable);
}
