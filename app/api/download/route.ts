import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'applications.csv');
    
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ message: 'Файл не найден' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const fileStream = fs.createReadStream(filePath);
    
    return new Response(fileStream, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="applications.csv"',
      },
    });
  } catch (error) {
    console.error('Ошибка в обработчике запроса:', error);
    return new Response(JSON.stringify({ message: 'Внутренняя ошибка сервера' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
