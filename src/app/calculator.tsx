import Button from './button';

export default function Calculator() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button text="1"/>
      <Button text="2"/>
      <Button text="3"/>
      <Button text="4"/>
      <Button text="5"/>
      <Button text="6"/>
      <Button text="7"/>
      <Button text="8"/>
      <Button text="9"/>
      <Button className="col-span-3" text="0"/>
    </div>
  )
}
