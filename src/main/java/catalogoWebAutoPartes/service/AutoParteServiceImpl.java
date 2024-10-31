package catalogoWebAutoPartes.service;

import catalogoWebAutoPartes.entidad.AutoParte;
import catalogoWebAutoPartes.repository.AutoParteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AutoParteServiceImpl implements AutoParteService {

    @Autowired
    private AutoParteRepository autoParteRepository;

    @Override
    public Page<AutoParte> findByCategoria(String categoria, Pageable pageable) {
        return autoParteRepository.findByCategoria(categoria, pageable);
    }
}