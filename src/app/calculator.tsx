import Button from './button';

export default function Calculator() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button colSize={1} text="1"/>
      <Button colSize={1} text="2"/>
      <Button colSize={1} text="3"/>
      <Button colSize={1} text="4"/>
      <Button colSize={1} text="5"/>
      <Button colSize={1} text="6"/>
      <Button colSize={1} text="7"/>
      <Button colSize={1} text="8"/>
      <Button colSize={1} text="9"/>
      <Button colSize={2} text="0"/>
      <Button colSize={1} text="."/>
    </div>
  )
}
