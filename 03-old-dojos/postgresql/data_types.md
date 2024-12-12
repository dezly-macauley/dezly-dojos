# PostgreSQL Data Types

## 1. Numeric Types
- **Smallint**: 2-byte integer, range: -32,768 to +32,767
- **Integer** (or **int**): 4-byte integer, range: -2,147,483,648 to 
  +2,147,483,647
- **Bigint**: 8-byte integer, range: ±9 quintillion
- **Decimal** / **Numeric**: User-specified precision, exact numeric values
- **Real**: 4-byte floating-point, approximate precision
- **Double Precision**: 8-byte floating-point, approximate precision
- **Serial** / **Bigserial**: Auto-incrementing integers (32-bit and 64-bit)

## 2. Monetary Types
- **Money**: Stores currency amounts, exact to two decimal places, formatted 
  with local currency settings

## 3. Character Types
- **Char(n)**: Fixed-length character string
- **Varchar(n)**: Variable-length character string with a specified limit
- **Text**: Variable unlimited-length character string (good for large text)

## 4. Binary Data Types
- **Bytea**: Stores binary data (like files or images in binary format)

## 5. Date/Time Types
- **Date**: Stores dates (without time)
- **Time**: Stores time of day (without date)
- **Timestamp**: Stores both date and time
- **Timestamp with Time Zone** (`timestamptz`): Adjusts date/time based on time 
  zones
- **Interval**: Stores intervals of time (e.g., days, hours, minutes)

## 6. Boolean Type
- **Boolean**: Holds `TRUE`, `FALSE`, or `NULL`

## 7. Enumerated Type
- **Enum**: Custom list of values (useful for predefined lists like statuses)

## 8. Geometric Types
- **Point**: Stores an `(x, y)` coordinate
- **Line** / **Lseg**: Represents line segments
- **Box**: Rectangular box defined by opposite corners
- **Circle**, **Polygon**, **Path**: Other shapes

## 9. Network Address Types
- **Inet**: IPv4 or IPv6 host address
- **Cidr**: IPv4 or IPv6 network
- **Macaddr**: MAC address

## 10. JSON Types
- **JSON**: Textual representation of JSON data
- **JSONB**: Binary JSON storage with indexing (more efficient for querying)

## 11. Array Types
- Arrays can be created for any data type, allowing storage of multiple values 
  in a single column (e.g., `INTEGER[]`, `TEXT[]`).

## 12. UUID Type
- **UUID**: Stores a universally unique identifier (useful for unique keys)

## 13. Range Types
- **Int4range**, **Int8range**, **Numrange**, **Tsrange** (timestamp range), 
  **Tstzrange** (timestamp with time zone range), etc.

## 14. Special Types
- **XML**: XML data type for storing XML documents
- **Tsquery** and **Tsvector**: For full-text search functionalities

## 15. Composite Types
- User-defined types that combine multiple fields into a single column (useful 
  for complex data structures)
