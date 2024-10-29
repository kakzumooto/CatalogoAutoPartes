package catalogoWebAutoPartes.repositorio;

import catalogoWebAutoPartes.entidad.AutoParte;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutoParteRepository extends JpaRepository<AutoParte, Long> {
}
