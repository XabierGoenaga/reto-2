<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/productos">
    <html>
      <head>
        <title>Almacen</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <script>
          // Función para eliminar una fila visualmente
          function eliminarFila(button) {
            // Encontrar la fila padre (tr) del botón clickeado
            const fila = button.closest('tr');

            fila.remove();
          }
        </script>
        <style>
          .btn-eliminar {
            transition: all 0.2s ease;
          }

          .btn-eliminar:hover {
            transform: scale(1.05);
          }

          tr {
            transition: opacity 0.3s ease;
          }
        </style>
      </head>
      <body>

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/admin">
            <i class="bi bi-shield-check me-2"></i>Panel de Administración
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/admin/almacen">Almacén</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/admin/questions">Preguntas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/admin/donantes">Donantes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/admin/donaciones">Donaciones</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12">
              <div class="card shadow-sm">
                <div class="card-header bg-white py-3">
                  <div class="row align-items-center">
                    <div class="col">
                      <h5 class="mb-0">Donaciones</h5>
                    </div>
                    <div class="col-auto">
                      <!-- Aquí podrías añadir un botón para nueva donación si lo necesitas -->
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                      <thead class="table-light">
                        <tr>
                          <th scope="col" class="ps-4">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Descripción</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col" class="text-end pe-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <xsl:for-each select="producto">
                          <xsl:variable name="position" select="position()"/>
                          <tr>
                            <td class="ps-4"><xsl:value-of select="$position"/></td>
                            <td><xsl:value-of select="nombre"/></td>
                            <td><xsl:value-of select="descripcion"/></td>
                            <td><xsl:value-of select="cantidad"/></td>
                            <td class="text-end pe-4">
                              <!-- Botón de eliminar con icono -->
                              <button type="button" class="btn btn-outline-danger btn-sm btn-eliminar" onclick="eliminarFila(this)">
                                <i class="bi bi-trash"></i> Eliminar
                              </button>
                            </td>
                          </tr>
                        </xsl:for-each>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
