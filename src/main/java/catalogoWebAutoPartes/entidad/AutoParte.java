package catalogoWebAutoPartes.entidad;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class AutoParte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre_original")
    private String nombre_original;
    private String categoria;

    @Lob
    private byte[] imagen;
}
