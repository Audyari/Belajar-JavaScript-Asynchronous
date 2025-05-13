```mermaid
flowchart TD
    A[Log: Bakal muncul pertama] --> B[setTimeout 4 detik]
    A --> C[Log: Bakal muncul kedua]
    B --> D[Log: Setelah 4 detik]
    C --> E[setTimeout 2 detik]
    E --> F[Log: Setelah 2 detik]

```