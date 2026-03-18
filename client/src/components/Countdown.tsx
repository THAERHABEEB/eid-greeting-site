import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 1,
    hours: 29,
    minutes: 2,
    seconds: 1,
  });

  useEffect(() => {
    // حساب الوقت المتبقي حتى أول أيام العيد
    // يمكن تعديل التاريخ حسب السنة الميلادية
    const calculateTimeLeft = () => {
      // تاريخ العيد المقبل (مثال: 1 شوال)
      const eidDate = new Date('2026-04-10T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = eidDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownItem = ({ value, label }: { value: number; label: string }) => (
    <div className="countdown-item">
      <div className="countdown-number">{String(value).padStart(2, '0')}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );

  return (
    <div className="countdown-box">
      <CountdownItem value={timeLeft.days} label="يوم" />
      <CountdownItem value={timeLeft.hours} label="ساعة" />
      <CountdownItem value={timeLeft.minutes} label="دقيقة" />
      <CountdownItem value={timeLeft.seconds} label="ثانية" />
    </div>
  );
}
