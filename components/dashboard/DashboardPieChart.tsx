import { View, StyleSheet } from "react-native";
import Svg, { G, Path } from "react-native-svg";

type PieItem = {
  label: string;
  value: number;
  color: string;
};

interface DashboardPieChartProps {
  items: PieItem[];
  size?: number;
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    x,
    y,
    "L",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    "Z",
  ].join(" ");
}

export function DashboardPieChart({ items, size = 180 }: DashboardPieChartProps) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  let cumulativeAngle = 0;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G>
          {items.map((item, index) => {
            const angle = (item.value / total) * 360;
            const startAngle = cumulativeAngle;
            const endAngle = cumulativeAngle + angle;
            cumulativeAngle += angle;

            return (
              <Path
                key={index}
                d={describeArc(
                  size / 2,
                  size / 2,
                  size / 2,
                  startAngle,
                  endAngle
                )}
                fill={item.color}
              />
            );
          })}
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
