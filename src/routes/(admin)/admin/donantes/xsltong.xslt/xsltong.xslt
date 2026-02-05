<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Donaciones</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script>
          function eliminarFila(button) {
            const fila = button.closest('tr');
            fila.remove();
          }
        </script>
        <style>
          .btn-eliminar { transition: all 0.2s ease; }
          .btn-eliminar:hover { transform: scale(1.05); }
          tr { transition: opacity 0.3s ease; }
        </style>
      </head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/admin">
              <i class="bi bi-shield-check me-2"></i>Panel de Administración
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="/admin/almacen">Almacén</a></li>
                <li class="nav-item"><a class="nav-link" href="/admin/questions">Preguntas</a></li>
                <li class="nav-item"><a class="nav-link" href="/admin/donantes">Donantes</a></li>
                <li class="nav-item"><a class="nav-link" href="/admin/donaciones">Donaciones</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12">
              <div class="card shadow-sm">
                <div class="card-header bg-white py-3">
                  <h5 class="mb-0">Donantes</h5>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                      <thead class="table-light">
                        <tr>
                          <th scope="col" class="ps-4">#</th>
                          <th>Nombre</th>
                          <th>Teléfono</th>
                          <th>Tipo</th>
                          <th scope="col" class="text-end pe-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <xsl:for-each select="//donante">
                          <tr>
                            <td class="ps-4"><xsl:value-of select="position()"/></td>
                            <td><xsl:value-of select="nombre"/></td>
                            <td><xsl:value-of select="telefono"/></td>
                            <td><span class="badge bg-info text-dark"><xsl:value-of select="@tipo"/></span></td>
                            <td class="text-end pe-4">
                              <button class="btn btn-outline-danger btn-sm btn-eliminar" onclick="eliminarFila(this)">
                                <i class="bi bi-trash"></i>
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
