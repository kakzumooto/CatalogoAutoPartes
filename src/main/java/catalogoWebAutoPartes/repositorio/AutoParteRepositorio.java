package catalogoWebAutoPartes.repositorio;

import catalogoWebAutoPartes.entidad.AutoParte;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutoParteRepositorio extends JpaRepository<AutoParte, Long> {
    // Puedes agregar métodos personalizados si es necesario
}
